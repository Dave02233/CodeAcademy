# CLUSTER - Riorganizzazione Fisica delle Tabelle

## Clustered vs Non-Clustered Index

### Differenze Fondamentali

#### Clustered Index
Un **clustered index** determina l'**ordine fisico** dei dati nella tabella. I dati stessi sono organizzati secondo l'indice.

**Caratteristiche:**
- **Uno solo per tabella**: perché i dati possono avere un solo ordine fisico
- **La tabella È l'indice**: le righe sono memorizzate nelle foglie del B-Tree
- **Nessun puntatore**: accesso diretto ai dati
- **Più veloce per range query**: dati consecutivi sono fisicamente vicini

**Esempio visivo:**
```
Clustered Index su (id):
Disco: [id=1, nome='Alice'] [id=2, nome='Bob'] [id=3, nome='Carlo']
       ↑ Dati fisicamente ordinati
```

#### Non-Clustered Index
Un **non-clustered index** è una struttura separata che contiene **puntatori** ai dati reali nella tabella.

**Caratteristiche:**
- **Multipli per tabella**: puoi averne quanti vuoi
- **Struttura separata**: foglie contengono chiave + puntatore alla riga
- **Doppio accesso**: indice → trova puntatore → accedi alla riga
- **Più flessibile**: non influenza ordine fisico

**Esempio visivo:**
```
Non-Clustered Index su (email):
Index: [alice@ex.com → riga #5] [bob@ex.com → riga #2] [carlo@ex.com → riga #9]
                ↓                        ↓                         ↓
Disco: ... [riga #2] ... [riga #5] ... [riga #9] ...
       ↑ Dati in ordine casuale/inserimento
```

### Vantaggi dei Non-Clustered Index

Sì, i non-clustered hanno benefici importanti:

#### 1. **Multipli indici per diverse query**
Puoi ottimizzare pattern di accesso diversi contemporaneamente:
```sql
-- Indice per ricerche per email
CREATE INDEX users_email_idx ON users(email);

-- Indice per ricerche per città
CREATE INDEX users_city_idx ON users(city);

-- Indice per ricerche per data registrazione
CREATE INDEX users_registered_idx ON users(registered_at);
```
Con un clustered index puoi ottimizzare solo UN ordine fisico.

#### 2. **Nessun impatto su INSERT/UPDATE disordinati**
Con clustered index, inserire valori fuori ordine richiede riorganizzazione:
```sql
-- Clustered su (id) sequenziale
INSERT INTO orders VALUES (1001, ...); -- OK, va in fondo
INSERT INTO orders VALUES (500, ...);  -- ❌ Deve inserire a metà, spostare dati

-- Non-clustered: sempre append
INSERT INTO orders VALUES (500, ...);  -- ✅ Va in fondo heap, aggiorna solo indice
```

#### 3. **Flessibilità con chiavi non sequenziali**
UUID, hash, chiavi random non penalizzano:
```sql
-- PRIMARY KEY con UUID (valori casuali)
CREATE TABLE sessions (
  id UUID PRIMARY KEY,  -- Non-clustered, nessun problema
  user_id INT,
  created_at TIMESTAMPTZ
);

-- Se fosse clustered: inserimenti causerebbero page splits continui
```

#### 4. **Lookup diretto per chiavi uniche**
Per query esatte (`WHERE id = 123`), la differenza è minima:
```sql
SELECT * FROM users WHERE email = 'alice@example.com';
-- Non-clustered: indice → trova puntatore → leggi riga (2 accessi, ma velocissimi)
-- Clustered: indice → dati direttamente (1 accesso)
-- Differenza: microsecondi, irrilevante per singole righe
```

#### 5. **Meno lock contention**
Scritture su non-clustered non bloccano l'ordine fisico:
```sql
-- Due transazioni inseriscono contemporaneamente
T1: INSERT INTO logs VALUES (uuid1, ...);  -- Append heap
T2: INSERT INTO logs VALUES (uuid2, ...);  -- Append heap
-- Nessun conflitto di pagine fisiche (con clustered potrebbero competere per stessa pagina)
```

#### 6. **Covering Indexes (Index-Only Scan)**
Puoi includere colonne extra senza riorganizzare la tabella:
```sql
CREATE INDEX users_email_name_idx ON users(email) INCLUDE (name, city);
-- Query: SELECT name, city FROM users WHERE email = '...';
-- Legge SOLO l'indice, non tocca la tabella (Index-Only Scan)
```
Con clustered avresti bisogno di ridefinire l'ordine fisico dell'intera tabella.

#### 7. **Ideale per OLTP (molte transazioni concorrenti)**
Database transazionali beneficiano di:
- Inserimenti veloci (append-only heap)
- Multipli accessi indicizzati (email, username, customer_id...)
- Nessuna riorganizzazione fisica costosa

**Esempio tipico e-commerce:**
```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,           -- Non-clustered, inserimenti veloci
  customer_id INT,
  order_date TIMESTAMPTZ,
  status VARCHAR(20)
);

CREATE INDEX orders_customer_idx ON orders(customer_id);  -- Per "ordini del cliente"
CREATE INDEX orders_date_idx ON orders(order_date);       -- Per "ordini di oggi"
CREATE INDEX orders_status_idx ON orders(status);         -- Per "ordini pending"
-- Tre pattern di accesso ottimizzati contemporaneamente!
```

### Confronto Diretto

| Aspetto | Clustered Index | Non-Clustered Index |
|---------|-----------------|---------------------|
| **Numero max** | 1 per tabella | Multipli (illimitati in teoria) |
| **Ordine fisico** | Determina l'ordine dei dati | Non influenza l'ordine |
| **Struttura** | Tabella stessa organizzata | Struttura separata con puntatori |
| **Velocità lookup** | Diretto | Indiretto (due accessi) |
| **Range query** | Molto veloce | Più lento (salti tra righe) |
| **Spazio disco** | Nessun extra (è la tabella) | Occupa spazio aggiuntivo |
| **INSERT/UPDATE** | Può richiedere riorganizzazione | Solo aggiorna indice |

### PostgreSQL: Heap Storage (Non-Clustered di default)

**Importante:** PostgreSQL usa un modello **heap-based** diverso da SQL Server/MySQL:
- **Tutti gli indici sono non-clustered** di default
- La tabella è un "heap" (righe in ordine di inserimento)
- Il comando `CLUSTER` simula un clustered index riorganizzando fisicamente i dati
- Ma è **temporaneo**: nuove scritture spargono nuovamente i dati

**In pratica:**
```sql
-- Crei un indice (è sempre non-clustered)
CREATE INDEX orders_date_idx ON orders(order_date);

-- Per "simulare" clustered index, riorganizzi fisicamente
CLUSTER orders USING orders_date_idx;
-- Ora i dati sono ordinati fisicamente per order_date

-- Ma nuovi INSERTs li spargono di nuovo
INSERT INTO orders VALUES (...); -- va in fondo all'heap, non in ordine
```

### Devi Rifare CLUSTER Dopo Ogni INSERT?

**NO!** Non devi rifare CLUSTER dopo ogni INSERT. Ecco perché:

#### Come Funziona il "Disordine"

Dopo CLUSTER, nuovi INSERT vanno in fondo all'heap (non in ordine):
```sql
-- Dopo CLUSTER su (date)
Disco: [01-gen][02-gen][03-gen][04-gen] ← tutti ordinati

-- Inserisci 02-gen (fuori ordine)
INSERT INTO orders (date, ...) VALUES ('2025-01-02', ...);

Disco: [01-gen][02-gen][03-gen][04-gen][02-gen*] ← nuovo alla fine
                                        ↑ fuori posto, ma NON grave!
```

**Cosa succede:**
- L'indice viene aggiornato correttamente (punta anche al nuovo record)
- Le query continuano a funzionare perfettamente
- La performance degrada **gradualmente**, non immediatamente

#### Quando Rifare CLUSTER

**Frequenza tipica:**
- **Mai**: per tabelle piccole o OLTP
- **Settimanale**: per tabelle medie con bulk load
- **Mensile**: per tabelle grandi con crescita costante
- **Dopo bulk load**: dopo caricamenti massivi (migliaia/milioni di righe)

**Esempi pratici:**

```sql
-- Caso 1: Bulk load notturno (dati PLC)
-- Carichi 1 milione di campioni ogni notte
INSERT INTO plc_samples SELECT ... FROM staging;  -- 1M righe
CLUSTER plc_samples;  -- Riorganizza una volta dopo il carico
-- Non serve rifare CLUSTER fino al prossimo bulk load

-- Caso 2: Crescita continua moderata
-- 10.000 INSERT distribuiti durante il giorno
-- CLUSTER ogni settimana (sabato notte)
CLUSTER plc_samples;

-- Caso 3: Append-only con partizionamento
-- Partizione attiva (novembre): riceve tutti gli INSERT
-- CLUSTER solo a fine mese, poi diventa read-only
CLUSTER plc_samples_2025_11;
-- Dicembre: nuova partizione, novembre non tocca più
```

#### Degradazione Graduale

```sql
-- Subito dopo CLUSTER: 100% ordinato
CLUSTER orders;
-- Performance: 100%

-- Dopo 1.000 INSERT (1% nuovi dati sparsi)
-- Performance: ~98% (quasi uguale)

-- Dopo 10.000 INSERT (10% nuovi dati sparsi)
-- Performance: ~85% (ancora buona)

-- Dopo 100.000 INSERT (50% nuovi dati sparsi)
-- Performance: ~60% (degrado evidente, considera re-cluster)
```

**Regola empirica:** Rifare CLUSTER quando i nuovi dati superano il **20-30%** del totale.

#### Monitoraggio Automatico

```sql
-- Query per stimare "disordine"
-- Confronta ordine fisico vs ordine logico dell'indice
SELECT 
  schemaname, 
  tablename, 
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size,
  n_tup_ins AS inserts_since_analyze,
  n_tup_upd AS updates_since_analyze
FROM pg_stat_user_tables
WHERE tablename = 'plc_samples';

-- Se inserts >> 30% delle righe totali, considera CLUSTER
```

#### Best Practice per PLC

**Strategia consigliata:**
```sql
-- 1. Setup iniziale
CREATE TABLE plc_samples (...);
CREATE INDEX samples_tag_ts_idx ON plc_samples(tag_id, ts);
CLUSTER plc_samples USING samples_tag_ts_idx;

-- 2. INSERT continui durante il giorno (normale operatività)
-- Nessun CLUSTER necessario!

-- 3. Manutenzione settimanale/mensile (finestra di basso carico)
-- Script schedulato (cron, pg_cron, Windows Task Scheduler)
DO $$
BEGIN
  -- Solo se degradato (es. >20% nuovi dati)
  IF (SELECT COUNT(*) FROM plc_samples_new) > 
     (SELECT COUNT(*) * 0.2 FROM plc_samples) THEN
    CLUSTER plc_samples;
    ANALYZE plc_samples;
  END IF;
END $$;
```

#### CLUSTER Non è Automatico

A differenza di SQL Server (clustered index mantiene ordine automaticamente), in PostgreSQL:
- CLUSTER è **un'operazione manuale**
- Va eseguita esplicitamente quando serve
- Non c'è manutenzione automatica in background

**Alternativa: Partizionamento**
```sql
-- Partizioni mensili: nuovi INSERT solo in partizione attiva
CREATE TABLE plc_samples_2025_11 PARTITION OF plc_samples
  FOR VALUES FROM ('2025-11-01') TO ('2025-12-01');

-- CLUSTER solo partizione attiva (piccola, veloce)
CLUSTER plc_samples_2025_11;

-- Partizioni vecchie: già clusterizzate, immutabili (no più INSERT)
-- Non serve mai più CLUSTER su quelle!
```

**Riepilogo:**
- ❌ **NON** fare CLUSTER dopo ogni INSERT
- ✅ Fai CLUSTER periodicamente (settimanale/mensile)
- ✅ Fai CLUSTER dopo bulk load massicci
- ✅ Monitora degradazione e decidi quando rifare
- ✅ Con partizionamento: CLUSTER solo partizione attiva

### SQL Server vs PostgreSQL

#### SQL Server
```sql
-- Clustered index (uno solo, spesso la PRIMARY KEY)
CREATE CLUSTERED INDEX idx_orders_date ON orders(order_date);
-- I dati sono SEMPRE ordinati fisicamente per order_date

-- Non-clustered index (multipli)
CREATE NONCLUSTERED INDEX idx_orders_customer ON orders(customer_id);
-- Puntatori alle righe ordinate dal clustered index
```

#### PostgreSQL
```sql
-- Tutti gli indici sono non-clustered
CREATE INDEX orders_date_idx ON orders(order_date);
CREATE INDEX orders_customer_idx ON orders(customer_id);

-- Per riorganizzare fisicamente (temporaneo)
CLUSTER orders USING orders_date_idx;
```

### Quando e Perché Usare CLUSTER

**La domanda chiave:** hai davvero bisogno di CLUSTER?

**Risposta breve:** Raramente! Solo per casi specifici dove:
1. **Leggi MOLTE righe consecutive** (range query massicce)
2. **Le scritture sono rare** o concentrate in finestre di manutenzione
3. **I dati sono già naturalmente ordinati** nel tempo

#### Il Problema Reale che CLUSTER Risolve

Gli indici non-clustered sono **veloci per trovare LE RIGHE**, ma se devi leggere **MIGLIAIA di righe consecutive**, saltare tra posizioni casuali sul disco diventa costoso:

```sql
-- Query che legge 100.000 righe di un giorno
SELECT * FROM sensor_data 
WHERE ts BETWEEN '2025-11-01' AND '2025-11-02';

-- CON INDICE NON-CLUSTERED:
-- Indice trova: riga #5 → salta sul disco → leggi
--               riga #892 → salta → leggi
--               riga #234 → salta → leggi
--               ... 100.000 salti casuali! ❌ Lento per I/O

-- CON CLUSTER:
-- Tutte le righe di Nov-01 sono fisicamente vicine
-- Leggi blocchi consecutivi: [riga #1][riga #2][riga #3]... ✅ Veloce
```

**Beneficio:** riduzione drastica di I/O random → letture sequenziali (10-100x più veloci su dischi meccanici, 2-5x su SSD).

#### Quando NON Serve CLUSTER

**Caso 1: Query che restituiscono poche righe**
```sql
-- Trova UN ordine specifico
SELECT * FROM orders WHERE id = 12345;
-- Indice non-clustered: 1 salto → velocissimo
-- CLUSTER: nessun beneficio (è sempre 1 accesso)
```

**Caso 2: Database OLTP (tante scritture)**
```sql
-- 1000 INSERT/sec su orders
INSERT INTO orders VALUES (...);
-- Senza CLUSTER: append veloce in fondo all'heap
-- Con CLUSTER: si disordina subito, beneficio perso in minuti
```

**Caso 3: Tabella piccola (< 1GB)**
```sql
-- Tabella da 100MB
SELECT * FROM small_table WHERE date = '2025-11-24';
-- Tutto già in RAM cache, I/O irrilevante
```

**Caso 4: Pattern di accesso vari**
```sql
-- Query diverse
SELECT * FROM users WHERE email = '...';     -- Usa indice email
SELECT * FROM users WHERE city = 'Roma';     -- Usa indice city
SELECT * FROM users WHERE created > '...';   -- Usa indice created
-- CLUSTER ottimizza solo UNA di queste, le altre restano random access
```

#### Quando CLUSTER Ha Senso

**Scenari ideali:**
- **Data warehouse / analytics**: tabelle storiche con milioni/miliardi di righe
- **Range query massive**: leggi sempre intervalli temporali grandi (giorni/settimane)
- **Read-heavy, write-rare**: archivi, log consolidati, tabelle di fatto
- **Dati naturalmente ordinati**: telemetria, log che crescono nel tempo

**Esempio pratico:**
```sql
-- Tabella sensori industriali: 500 milioni di righe, solo INSERT (append-only)
CREATE TABLE sensor_readings (
  sensor_id INT,
  ts TIMESTAMPTZ NOT NULL,
  value NUMERIC
);

CREATE INDEX readings_sensor_ts_idx ON sensor_readings(sensor_id, ts);

-- Query tipica: analisi 1 mese di UN sensore (milioni di righe)
SELECT AVG(value), MAX(value) 
FROM sensor_readings 
WHERE sensor_id = 42 
  AND ts BETWEEN '2025-10-01' AND '2025-11-01';

-- Beneficio CLUSTER:
CLUSTER sensor_readings USING readings_sensor_ts_idx;
-- Tutte le righe del sensor_id=42 sono fisicamente vicine e in ordine temporale
-- Lettura: scansione sequenziale invece di milioni di salti casuali
-- Performance: da 30 secondi a 2 secondi ✅
```

**Manutenzione:**
```sql
-- Dopo bulk load giornaliero (di notte)
INSERT INTO sensor_readings SELECT ... FROM staging;  -- Carica dati del giorno
CLUSTER sensor_readings;  -- Riorganizza (10 minuti, nessuno usa il DB)
ANALYZE sensor_readings;
```

#### Quando Evitare CLUSTER

**Scenari problematici:**
- **OLTP ad alta concorrenza**: e-commerce, social network, applicazioni web
- **Chiavi random** (UUID): inserimenti causano riorganizzazioni continue
- **Tabelle piccole**: overhead > beneficio
- **Scritture continue**: il clustering si perde troppo velocemente
- **Nessun pattern dominante**: accessi sparsi su colonne diverse

**Esempio negativo:**
```sql
-- Tabella ordini e-commerce (1000 INSERT/sec, accessi misti)
CREATE TABLE orders (
  id UUID PRIMARY KEY,  -- ❌ Chiave random
  customer_id INT,
  created_at TIMESTAMPTZ,
  status VARCHAR(20)
);

-- Query miste
SELECT * FROM orders WHERE id = '...';           -- Per UUID
SELECT * FROM orders WHERE customer_id = 123;    -- Per cliente
SELECT * FROM orders WHERE status = 'pending';   -- Per stato

-- CLUSTER inutile perché:
-- 1. Scritture continue disordinano subito
-- 2. Tre pattern di accesso diversi (cluster ottimizza solo uno)
-- 3. Query singole (non range massive)
-- 4. UUID random causa page splits
```

### Regola Pratica

**Usa indici non-clustered (default)** per:
- OLTP, applicazioni web, API
- Pattern di accesso multipli
- Lookup singoli o piccoli range
- Scritture frequenti

**Usa CLUSTER** solo per:
- Analytics / data warehouse
- Range query che leggono milioni di righe consecutive
- Tabelle append-only con manutenzione programmata
- Performance misurata mostra beneficio I/O significativo (usa `EXPLAIN ANALYZE`!)

### Caso Ideale: Dati da PLC / Sensori

I **dati da PLC con timestamp** sono il **caso perfetto** per CLUSTER:

#### Perché Funziona Benissimo

**Caratteristiche dei dati PLC:**
- ✅ **Append-only**: solo INSERT, nessun UPDATE/DELETE
- ✅ **Ordinati naturalmente**: timestamp crescente
- ✅ **Query per intervalli**: sempre range temporali (ultima ora, ultimo giorno, ultimo mese)
- ✅ **Grandi volumi**: milioni/miliardi di campioni
- ✅ **Pattern prevedibile**: accesso per tag + intervallo tempo

**Esempio schema:**
```sql
CREATE TABLE plc_samples (
  tag_id INT NOT NULL,           -- ID del sensore/variabile PLC
  ts TIMESTAMPTZ NOT NULL,       -- Timestamp del campione
  value NUMERIC,                 -- Valore misurato
  quality SMALLINT,              -- Qualità del dato (0-100)
  PRIMARY KEY (tag_id, ts)
);

-- Indice composito per query tipiche
CREATE INDEX samples_tag_ts_idx ON plc_samples(tag_id, ts);

-- CLUSTER per ottimizzare letture
CLUSTER plc_samples USING samples_tag_ts_idx;
```

#### Beneficio Concreto

**Query tipica:**
```sql
-- Trend temperatura ultimo turno (8 ore, ~28.800 campioni a 1 sample/sec)
SELECT ts, value 
FROM plc_samples 
WHERE tag_id = 42  -- Temperatura forno
  AND ts BETWEEN '2025-11-24 06:00' AND '2025-11-24 14:00';
```

**Senza CLUSTER:**
```
- Indice trova 28.800 righe sparse sul disco
- 28.800 salti casuali per leggerle
- Execution Time: 850ms
```

**Con CLUSTER:**
```
- Tutte le righe del tag_id=42 fisicamente vicine e in ordine temporale
- Lettura sequenziale di blocchi contigui
- Execution Time: 45ms ✅ (18x più veloce!)
```

#### Strategia di Manutenzione

**Opzione 1: CLUSTER Periodico**
```sql
-- Script giornaliero (di notte, basso carico)
-- Riorganizza dopo gli INSERT del giorno
CLUSTER plc_samples;
ANALYZE plc_samples;
```

**Opzione 2: Partizionamento + CLUSTER**
```sql
-- Partiziona per mese
CREATE TABLE plc_samples (
  tag_id INT NOT NULL,
  ts TIMESTAMPTZ NOT NULL,
  value NUMERIC,
  PRIMARY KEY (tag_id, ts)
) PARTITION BY RANGE (ts);

-- Partizione per novembre 2025
CREATE TABLE plc_samples_2025_11 PARTITION OF plc_samples
  FOR VALUES FROM ('2025-11-01') TO ('2025-12-01');

-- CLUSTER solo la partizione attiva
CREATE INDEX samples_2025_11_tag_ts_idx 
  ON plc_samples_2025_11(tag_id, ts);
CLUSTER plc_samples_2025_11 USING samples_2025_11_tag_ts_idx;

-- Partizioni vecchie (archivio) già clusterizzate una volta, non toccate più
```

**Opzione 3: Bulk Load + CLUSTER**
```sql
-- 1. Carica batch giornaliero da staging
INSERT INTO plc_samples 
SELECT tag_id, ts, value, quality 
FROM staging_plc_data 
WHERE date = CURRENT_DATE;

-- 2. Riorganizza (solo se volumi grandi e query critiche)
CLUSTER plc_samples;

-- 3. Refresh statistiche
ANALYZE plc_samples;
```

#### Quando NON Serve CLUSTER (anche per PLC)

**Caso 1: Volumi piccoli**
```sql
-- Solo 10 tag, 1 campione/minuto, 1 mese = 432.000 righe (~50MB)
-- Già tutto in RAM cache, CLUSTER inutile
```

**Caso 2: Accesso solo ultimo valore**
```sql
-- Query: solo ultimo campione di ogni tag
SELECT DISTINCT ON (tag_id) tag_id, ts, value
FROM plc_samples
ORDER BY tag_id, ts DESC;
-- Index Scan su (tag_id, ts DESC) è già velocissimo, CLUSTER non migliora
```

**Caso 3: Inserimenti real-time critici**
```sql
-- SCADA ad altissima frequenza (10.000 samples/sec)
-- CLUSTER blocca scritture per minuti → inaccettabile per sistema real-time
-- Meglio: partizionamento + indici ottimizzati
```

#### Configurazione Ottimale per PLC

```sql
-- Schema completo ottimizzato
CREATE TABLE plc_samples (
  tag_id INT NOT NULL,
  ts TIMESTAMPTZ NOT NULL,
  value NUMERIC NOT NULL,
  quality SMALLINT DEFAULT 100,
  alarm BOOLEAN DEFAULT false,
  PRIMARY KEY (tag_id, ts)
) PARTITION BY RANGE (ts);

-- Partizione mensile
CREATE TABLE plc_samples_2025_11 PARTITION OF plc_samples
  FOR VALUES FROM ('2025-11-01') TO ('2025-12-01');

-- Indice composito (già ordinato per CLUSTER)
CREATE INDEX samples_2025_11_idx ON plc_samples_2025_11(tag_id, ts);

-- Indice parziale per allarmi
CREATE INDEX samples_2025_11_alarm_idx 
  ON plc_samples_2025_11(tag_id, ts) WHERE alarm = true;

-- CLUSTER partizione attiva (settimanale)
CLUSTER plc_samples_2025_11 USING samples_2025_11_idx;
ANALYZE plc_samples_2025_11;
```

**Risultato:**
- Query per intervalli: 10-50x più veloci
- Manutenzione: solo partizione attiva (veloce)
- Archivio: partizioni vecchie già ottimizzate, immutabili
- Spazio: riduzione ~20-30% per compattazione

#### Misurazione Beneficio

```sql
-- Prima del CLUSTER
EXPLAIN (ANALYZE, BUFFERS) 
SELECT AVG(value) 
FROM plc_samples 
WHERE tag_id = 42 
  AND ts BETWEEN now() - INTERVAL '7 days' AND now();

-- Nota: Buffers: shared read=XXXX (letture da disco)

-- Dopo CLUSTER
CLUSTER plc_samples USING samples_tag_ts_idx;
ANALYZE plc_samples;

-- Ripeti query
EXPLAIN (ANALYZE, BUFFERS) 
SELECT AVG(value) 
FROM plc_samples 
WHERE tag_id = 42 
  AND ts BETWEEN now() - INTERVAL '7 days' AND now();

-- Osserva: riduzione drastica di 'shared read', 'Execution Time' minore
```

**Esempio decisionale:**
```sql
-- Tabella log con accessi prevalentemente per intervalli temporali
CREATE TABLE access_logs (
  id BIGSERIAL,
  ts TIMESTAMPTZ NOT NULL,
  user_id INT,
  action TEXT
);

CREATE INDEX logs_ts_idx ON access_logs(ts);
CLUSTER access_logs USING logs_ts_idx;
-- Migliora drasticamente: SELECT * FROM access_logs WHERE ts >= now() - INTERVAL '1 day';
```

### Quando Evitare Clustered

**Scenari problematici:**
- **OLTP ad alta concorrenza**: scritture frequenti disordinano continuamente
- **Chiavi random** (UUID): inserimenti causano riorganizzazioni costose
- **Tabelle piccole**: già in RAM, nessun beneficio I/O
- **Pattern di accesso sparsi**: non leggi mai range contigui

## Cos'è CLUSTER in PostgreSQL?

`CLUSTER` è un comando PostgreSQL che **riorganizza fisicamente le righe di una tabella** sul disco seguendo l'ordine di un indice specifico. Questo significa che le righe vengono riscritte in modo che quelle con valori simili nell'indice siano fisicamente vicine.

## Perché usare CLUSTER?

### Vantaggi
- **Migliora performance di range query**: quando leggi molte righe consecutive secondo l'indice, sono già vicine su disco → meno I/O
- **Ottimizza scansioni sequenziali filtrate**: letture più veloci per query che accedono a blocchi contigui
- **Riduce frammentazione**: compatta i dati eliminando spazi morti

### Svantaggi
- **Blocca la tabella in scrittura** durante l'operazione (acquista `ACCESS EXCLUSIVE LOCK`)
- **Operazione pesante**: riscrive l'intera tabella
- **Temporaneo**: INSERTs/UPDATEs successivi spargono nuovamente i dati

## Quanto Dura CLUSTER?

La durata dipende da:
1. **Dimensione tabella**: righe × larghezza media
2. **Velocità disco**: HDD (lento) vs SSD (veloce) vs NVMe (molto veloce)
3. **CPU e RAM disponibili**: più risorse = più veloce
4. **Carico del database**: CLUSTER compete con altre query

### Tempi Indicativi

**Regola empirica:** ~2-5 minuti per GB su hardware moderno (SSD).

| Dimensione Tabella | HDD (meccanico) | SSD | NVMe | RAM (tutto in cache) |
|-------------------|-----------------|-----|------|---------------------|
| 100 MB | 30 sec | 10 sec | 5 sec | 3 sec |
| 1 GB | 5 min | 2 min | 1 min | 30 sec |
| 10 GB | 50 min | 20 min | 10 min | 5 min |
| 100 GB | 8 ore | 3 ore | 1.5 ore | 45 min |
| 1 TB | 3-4 giorni | 1-2 giorni | 12-18 ore | 8 ore |

**Nota:** Tempi approssimativi, possono variare significativamente.

### Fattori che Influenzano la Durata

#### 1. Tipo di Disco
```sql
-- SSD: 500 MB/s scrittura sequenziale
-- Tabella 10 GB → ~20 secondi solo I/O + overhead (indici, ordinamento)
-- Totale: ~10-20 minuti

-- HDD: 150 MB/s scrittura sequenziale
-- Tabella 10 GB → ~70 secondi solo I/O + overhead
-- Totale: ~40-60 minuti
```

#### 2. Complessità Indice
```sql
-- Indice semplice (singola colonna INT)
CREATE INDEX samples_ts_idx ON samples(ts);
CLUSTER samples USING samples_ts_idx;
-- Veloce: ordinamento semplice

-- Indice composito con molte colonne
CREATE INDEX samples_complex_idx ON samples(tag_id, ts, quality, alarm, value);
CLUSTER samples USING samples_complex_idx;
-- Più lento: ordinamento complesso, confronti multipli
```

#### 3. Numero di Indici Secondari
```sql
-- Tabella con 1 indice
CREATE INDEX samples_ts_idx ON samples(ts);
CLUSTER samples USING samples_ts_idx;
-- Veloce: ricostruisce solo 1 indice

-- Tabella con 10 indici
CREATE INDEX idx1 ON samples(tag_id);
CREATE INDEX idx2 ON samples(ts);
CREATE INDEX idx3 ON samples(quality);
-- ... altri 7 indici
CLUSTER samples USING samples_ts_idx;
-- Lento: deve ricostruire TUTTI i 10 indici dopo la riorganizzazione
```

**Impatto:** ogni indice aggiuntivo aggiunge ~10-20% al tempo totale.

#### 4. Carico Sistema
```sql
-- Database idle (notte, manutenzione)
CLUSTER samples;  -- Usa tutte le risorse disponibili → veloce

-- Database sotto carico (giorno, utenti attivi)
CLUSTER samples;  -- Compete con altre query → 2-3x più lento
```

### Monitorare Progresso CLUSTER

CLUSTER non mostra progresso nativo, ma puoi stimare:

**Opzione 1: Query su pg_stat_activity**
```sql
-- In altra sessione mentre CLUSTER è in esecuzione
SELECT 
  pid,
  now() - query_start AS duration,
  state,
  query
FROM pg_stat_activity
WHERE query LIKE '%CLUSTER%' AND state = 'active';
```

**Opzione 2: Spazio disco temporaneo**
```sql
-- CLUSTER crea copia temporanea della tabella
-- Monitorare crescita file temporanei
SELECT 
  pg_size_pretty(SUM(size)) AS temp_size
FROM pg_ls_tmpdir();
-- Se vedi crescita, CLUSTER sta procedendo
```

**Opzione 3: Estensione pg_stat_progress_cluster (PostgreSQL 12+)**
```sql
-- Mostra progresso in tempo reale
SELECT 
  relid::regclass AS table_name,
  command,
  phase,
  heap_tuples_scanned,
  heap_tuples_written,
  heap_blks_total,
  heap_blks_scanned,
  index_rebuild_count
FROM pg_stat_progress_cluster;
```

### Stima Preventiva

**Calcolo approssimativo:**
```sql
-- 1. Dimensione tabella
SELECT pg_size_pretty(pg_total_relation_size('plc_samples')) AS total_size;
-- Output: 25 GB

-- 2. Numero indici
SELECT COUNT(*) AS num_indexes
FROM pg_indexes
WHERE tablename = 'plc_samples';
-- Output: 5 indici

-- 3. Stima tempo (su SSD)
-- Base: 25 GB × 2 min/GB = 50 minuti
-- Indici: 50 min × (1 + 0.1 × 5) = 75 minuti
-- Stima finale: ~1 ora 15 minuti
```

### Ottimizzare la Durata

#### 1. Aumenta maintenance_work_mem
```sql
-- Più RAM per ordinamento = più veloce
SET maintenance_work_mem = '2GB';  -- Default spesso 64MB
CLUSTER plc_samples USING samples_tag_ts_idx;
RESET maintenance_work_mem;
```

#### 2. Rimuovi Indici Non Critici Temporaneamente
```sql
-- Se hai molti indici, droppa quelli non essenziali
DROP INDEX idx_samples_quality;
DROP INDEX idx_samples_alarm;

-- CLUSTER (più veloce, meno indici da ricostruire)
CLUSTER plc_samples USING samples_tag_ts_idx;

-- Ricrea indici dopo
CREATE INDEX idx_samples_quality ON plc_samples(quality);
CREATE INDEX idx_samples_alarm ON plc_samples(alarm);
```

#### 3. Usa CLUSTER VERBOSE per Feedback
```sql
-- PostgreSQL 14+ supporta VERBOSE
CLUSTER VERBOSE plc_samples;
-- Mostra messaggi di progresso nella console
```

#### 4. Partiziona Grandi Tabelle
```sql
-- Invece di clusterizzare 1 TB intera (giorni!)
-- Partiziona e cluster solo partizione attiva (GB, minuti)
CREATE TABLE plc_samples_2025_11 PARTITION OF plc_samples
  FOR VALUES FROM ('2025-11-01') TO ('2025-12-01');

CLUSTER plc_samples_2025_11;  -- Solo 30 GB → 1 ora invece di 20 ore
```

### Esempio Reale: PLC con 50 Milioni Righe

```sql
-- Tabella: 50M righe, 20 GB totali, 4 indici, SSD
CREATE TABLE plc_samples (
  tag_id INT,
  ts TIMESTAMPTZ,
  value NUMERIC
);

-- Preparazione
SET maintenance_work_mem = '2GB';

-- Esecuzione (con timing)
\timing on
CLUSTER plc_samples USING samples_tag_ts_idx;
-- Risultato tipico: 35-45 minuti
\timing off

-- Refresh statistiche
ANALYZE plc_samples;  -- 2-5 minuti aggiuntivi
```

### Lock e Disponibilità

**Importante:** Durante CLUSTER la tabella è **bloccata in scrittura** (`ACCESS EXCLUSIVE LOCK`).

```sql
-- T1: Inizio CLUSTER (blocca tabella)
CLUSTER plc_samples USING samples_tag_ts_idx;

-- T2: Tentativo INSERT da altra sessione
INSERT INTO plc_samples VALUES (...);
-- ❌ ATTENDE fino alla fine di CLUSTER (può attendere ore!)

-- T3: Tentativo SELECT
SELECT * FROM plc_samples WHERE tag_id = 42;
-- ✅ FUNZIONA in PostgreSQL 9.6+ (letture non bloccate)
-- ❌ Bloccato in versioni precedenti
```

**Pianificazione:**
- Esegui CLUSTER in **finestre di manutenzione** (notte, weekend)
- Avvisa utenti di possibile indisponibilità scritture
- Stima tempo + margine (1.5-2x) per sicurezza

### Alternativa: CLUSTER CONCURRENTLY?

**Non esiste!** A differenza di `CREATE INDEX CONCURRENTLY`, non c'è `CLUSTER CONCURRENTLY`.

**Workaround:**
```sql
-- 1. Crea nuova tabella clusterizzata
CREATE TABLE plc_samples_new AS
SELECT * FROM plc_samples
ORDER BY tag_id, ts;

-- 2. Crea indici sulla nuova
CREATE INDEX samples_new_tag_ts_idx ON plc_samples_new(tag_id, ts);

-- 3. Swap atomico (transazione veloce)
BEGIN;
  ALTER TABLE plc_samples RENAME TO plc_samples_old;
  ALTER TABLE plc_samples_new RENAME TO plc_samples;
COMMIT;

-- 4. Cleanup
DROP TABLE plc_samples_old;
```
Svantaggio: spazio doppio richiesto temporaneamente.

## Come funziona

Senza CLUSTER, le righe sono scritte sul disco nell'ordine di inserimento:
```
Disco: [id=5] [id=1] [id=8] [id=3] [id=2] [id=9] [id=4]
```

Con CLUSTER su un indice `(id)`:
```
Disco: [id=1] [id=2] [id=3] [id=4] [id=5] [id=8] [id=9]
```

Query come `SELECT * FROM table WHERE id BETWEEN 2 AND 5;` leggono blocchi consecutivi → più veloce.

## Sintassi

### Cluster su un indice specifico
```sql
CLUSTER table_name USING index_name;
```

### Cluster su tutte le tabelle con indice cluster definito
```sql
CLUSTER;
```

### Rimuovere l'associazione cluster
```sql
ALTER TABLE table_name SET WITHOUT CLUSTER;
```

## Esempi Pratici

### Esempio 1: Tabella Ordini per Data
```sql
-- Tabella con ordini sparsi nel tempo
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  total NUMERIC
);

-- Indice su order_date
CREATE INDEX orders_date_idx ON orders(order_date);

-- Riorganizza fisicamente per data
CLUSTER orders USING orders_date_idx;
```

**Beneficio:** query come `SELECT * FROM orders WHERE order_date BETWEEN '2025-01-01' AND '2025-01-31';` leggono blocchi consecutivi.

### Esempio 2: Dati PLC per Tag e Timestamp
```sql
CREATE TABLE samples (
  id BIGSERIAL PRIMARY KEY,
  tag_id INT NOT NULL,
  ts TIMESTAMPTZ NOT NULL,
  value NUMERIC
);

-- Indice composito
CREATE INDEX samples_tag_ts_idx ON samples(tag_id, ts);

-- Cluster per raggruppare fisicamente i campioni di ciascun tag ordinati per tempo
CLUSTER samples USING samples_tag_ts_idx;
```

**Beneficio:** `SELECT * FROM samples WHERE tag_id = 42 AND ts >= now() - INTERVAL '1 hour';` legge dati contigui.

### Esempio 3: Cluster Periodico
```sql
-- Prima volta: definisci l'indice per cluster
CLUSTER users USING users_last_login_idx;

-- Manutenzione periodica: ricluster senza specificare indice (usa quello precedente)
CLUSTER users;

-- Oppure ricluster tutto il database
CLUSTER;
```

## Quando NON usare CLUSTER

- **Tabelle ad alta frequenza di scrittura**: il clustering si perde velocemente
- **Tabelle piccole**: overhead non giustificato (già in cache)
- **Nessun pattern di accesso sequenziale**: se le query non sfruttano range, inutile
- **Database in produzione senza finestra di manutenzione**: il lock blocca scritture

## Alternative e Strategie

### 1. Partitioning
Invece di clusterizzare, partiziona per intervalli (es. data):
```sql
CREATE TABLE orders (
  id BIGSERIAL,
  order_date DATE NOT NULL,
  ...
) PARTITION BY RANGE (order_date);

CREATE TABLE orders_2025_01 PARTITION OF orders
  FOR VALUES FROM ('2025-01-01') TO ('2025-02-01');
```
I dati sono già organizzati logicamente senza bisogno di CLUSTER.

### 2. BRIN Indexes
Per tabelle naturalmente ordinate (es. timestamp crescenti):
```sql
CREATE INDEX samples_ts_brin_idx ON samples USING BRIN(ts);
```
BRIN sfrutta l'ordine fisico senza riorganizzare.

### 3. Cluster Periodico Automatizzato
Script di manutenzione notturno:
```sql
-- In una finestra di basso carico
CLUSTER orders;
ANALYZE orders;
```

## Best Practices

1. **Scegli l'indice giusto**: cluster sull'indice delle query più critiche (es. range temporali)
2. **Verifica il beneficio**: usa `EXPLAIN ANALYZE` prima e dopo
3. **Pianifica downtime**: CLUSTER blocca scritture, fallo in manutenzione
4. **Combina con VACUUM FULL**: entrambi riscrivono la tabella, falli insieme
5. **Monitora la frammentazione**: se la tabella cresce molto tra un cluster e l'altro, valuta partitioning

## Comandi Correlati

```sql
-- Verifica se tabella è clusterizzata e su quale indice
SELECT tablename, indexname 
FROM pg_indexes 
WHERE tablename = 'orders' AND indisclustered = true;

-- Imposta indice cluster senza eseguire subito
ALTER TABLE orders CLUSTER ON orders_date_idx;
-- Poi esegui quando vuoi
CLUSTER orders;

-- Rimuovi associazione
ALTER TABLE orders SET WITHOUT CLUSTER;
```

## Misurazione Performance

Prima del CLUSTER:
```sql
EXPLAIN (ANALYZE, BUFFERS) 
SELECT * FROM orders WHERE order_date BETWEEN '2025-01-01' AND '2025-01-31';
```
Nota: `Buffers: shared hit=X read=Y`

Dopo il CLUSTER:
```sql
CLUSTER orders USING orders_date_idx;
ANALYZE orders;

EXPLAIN (ANALYZE, BUFFERS) 
SELECT * FROM orders WHERE order_date BETWEEN '2025-01-01' AND '2025-01-31';
```
Osserva riduzione di `read` (letture da disco) e miglioramento `Execution Time`.

## Riepilogo

| Aspetto | Dettaglio |
|---------|-----------|
| **Scopo** | Riorganizzare fisicamente righe secondo un indice |
| **Pro** | Range query più veloci, meno I/O, compattazione |
| **Contro** | Lock esclusivo, temporaneo, pesante |
| **Quando** | Tabelle con range query frequenti, accesso sequenziale, manutenzione programmata |
| **Alternative** | Partitioning, BRIN indexes, ORDER BY in query |
| **Frequenza** | Periodico (settimanale/mensile) o dopo bulk load |

**Regola pratica:** CLUSTER è utile per tabelle storiche/analytics con accesso prevalentemente in range e finestre di manutenzione. Per OLTP ad alta concorrenza, preferisci partitioning o indici appropriati.
