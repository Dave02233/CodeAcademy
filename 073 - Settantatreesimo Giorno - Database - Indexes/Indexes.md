# Database Indexes

## Cos'è un Index?

Un **index** (indice) è una struttura dati che organizza i dati di una tabella per migliorare le prestazioni nelle operazioni di ricerca e filtro. Funziona come l'indice di un libro: invece di scorrere tutte le pagine, puoi trovare rapidamente ciò che cerchi.

- Una tabella può avere **zero, uno o più indici**
- Gli indici accelerano le query `SELECT` con `WHERE`, `JOIN`, `ORDER BY`
- Hanno costi: rallentano `INSERT`, `UPDATE`, `DELETE` e occupano spazio

## Come funzionano gli Indexes

Gli indici utilizzano strutture dati che organizzano le informazioni per velocizzare le ricerche. Per default, PostgreSQL usa la struttura **B-Tree** (Binary Tree).

### B-Tree (Binary Tree)

Il B-Tree divide i record possibili a metà, poi ancora a metà, e così via fino a trovare il record cercato.

**Esempio pratico:**
Immagina una tabella `clienti` con 100 record ordinati per `loyalty_score` (da 1 a 100). Senza indice, per trovare il cliente con score 100, devi scorrere tutti i record. Con un indice B-Tree:

1. Primo controllo: il valore cercato è > o < di 50?
2. Secondo controllo: > o < di 75?
3. Terzo controllo: > o < di 87?
4. E così via...

**Complessità:**
- **Senza indice**: O(n) → devi controllare tutti gli n record
- **Con B-Tree**: O(log₂n) → nel caso peggiore, devi fare log₂n confronti

**Esempio su larga scala:**
Con 1.000.000 di record:
- **Senza indice**: 1.000.000 confronti
- **Con B-Tree**: 20 confronti (log₂1.000.000 ≈ 20)

### Altri tipi di Index

#### Hash Index
- **Quando usarlo**: solo per uguaglianze esatte (`WHERE col = value`)
- **Non supporta**: range queries (`<`, `>`, `BETWEEN`), `ORDER BY`, pattern matching
- **Vantaggio**: leggermente più veloce del B-Tree per lookup esatti su chiavi semplici
- **Svantaggio**: meno flessibile, non supporta ricerche parziali

**Esempio:**
```sql
CREATE INDEX idx_users_id_hash ON users USING HASH(user_id);
-- Efficace solo per: SELECT * FROM users WHERE user_id = 123;
-- Non efficace per: SELECT * FROM users WHERE user_id > 100;
```

**Quando scegliere Hash invece di B-Tree?**
- Raramente! B-Tree è quasi sempre la scelta migliore perché:
  - Supporta uguaglianze E range queries
  - Performance simile per lookup esatti (differenza trascurabile)
  - Molto più versatile

**Esempio pratico:**
```sql
-- ❌ NON fare questo (Hash limita le possibilità)
CREATE INDEX idx_users_username_hash ON users USING HASH(username);
-- Funziona solo per: WHERE username = 'mario'
-- NON funziona per: WHERE username LIKE 'mar%', WHERE username > 'a', ORDER BY username

-- ✅ Fai questo (B-Tree copre tutti i casi)
CREATE INDEX idx_users_username ON users(username);
-- Funziona per: WHERE username = 'mario', WHERE username LIKE 'mar%', 
--                WHERE username > 'a', ORDER BY username
```

**Regola semplice**: usa sempre B-Tree (default) a meno che tu non abbia esigenze molto specifiche (full-text search → GIN, dati geografici → GiST)

#### GIN (Generalized Inverted Index)
- **Quando usarlo**: full-text search, array, JSONB
- **Esempio:**
```sql
CREATE INDEX idx_articles_content ON articles USING GIN(to_tsvector('english', content));
SELECT * FROM articles WHERE to_tsvector('english', content) @@ to_tsquery('database');
```

#### GiST (Generalized Search Tree)
- **Quando usarlo**: dati geometrici, range types, full-text search
- **Esempio con PostGIS:**
```sql
CREATE INDEX idx_locations_geom ON locations USING GIST(geom);
```

**Riepilogo scelta index:**
- **99% dei casi**: usa B-Tree (default, versatile, performante)
- **Full-text search**: usa GIN
- **Dati geografici/geometrici**: usa GiST
- **Hash**: quasi mai (solo se hai solo uguaglianze esatte e mai range)

### Visualizzare gli Indexes esistenti

In PostgreSQL:
```sql
SELECT *
FROM pg_indexes
WHERE tablename = 'products';
```

## Creare un Index

```sql
CREATE INDEX idx_nome_colonna ON nome_tabella(colonna);
```

**Esempio:**
```sql
CREATE INDEX idx_customers_email ON customers(email);
```

### Convenzione di Naming
Usa un nome consistente: `nomeTabella_nomeColonna_idx` oppure per più colonne `nomeTabella_col1_col2_idx`.

Esempi:
```sql
CREATE INDEX customers_email_idx ON customers(email);
CREATE INDEX customers_city_age_idx ON customers(city, age);
CREATE INDEX samples_tag_id_ts_idx ON samples(tag_id, ts);
```
Vantaggi:
- Subito chiaro cosa indicizza
- Evita collisioni e nomi generici (`idx1`, `index_email`)
- Facilita manutenzione e drop mirati: `DROP INDEX customers_email_idx;`

### Index Multicolonna

Per query che filtrano su più colonne:
```sql
CREATE INDEX idx_customers_city_age ON customers(city, age);
```
**Nota:** l'ordine delle colonne è importante! L'indice è efficiente se usi `city` da solo o `city + age`, ma non solo `age`.

#### Ordinamento DESC e ASC negli indici
Puoi specificare l'ordinamento per ogni colonna nell'indice per ottimizzare `ORDER BY`:
```sql
CREATE INDEX logins_date_time_idx ON logins (date_time DESC, user_name);
-- Ottimizza: SELECT * FROM logins ORDER BY date_time DESC, user_name ASC;
```

- **ASC** (default): ordinamento crescente
- **DESC**: ordinamento decrescente

**Quando serve:**
- Query con `ORDER BY` che invertono l'ordine naturale
- Combinazioni miste (es. `ORDER BY date DESC, name ASC`)

**Esempio pratico:**
```sql
-- Query frequente: ultimi login ordinati per data decrescente
SELECT * FROM logins ORDER BY date_time DESC LIMIT 100;

-- Indice ottimizzato
CREATE INDEX logins_date_desc_idx ON logins (date_time DESC);
-- Il database legge l'indice dall'inizio senza dover invertire l'ordine
```

**Nota:** se l'indice è `(date_time ASC)` ma fai `ORDER BY date_time DESC`, PostgreSQL può comunque usarlo leggendolo all'inverso (backward scan), ma specificare `DESC` nell'indice può migliorare leggermente le performance in alcuni casi specifici.

#### Approfondimento sugli indici multicolonna (Composite / Compound)
Un indice multicolonna crea una struttura ordinata secondo l'ORDINE indicato. Questo significa che un indice su `(last_name, first_name)` è diverso da uno su `(first_name, last_name)` e può cambiare drasticamente le performance.

Esempio classico:
```sql
CREATE INDEX customers_last_name_first_name_idx ON customers(last_name, first_name);
```
Query ottimizzata:
```sql
SELECT * FROM customers WHERE last_name = 'Smith' AND first_name IN ('David','Rachel','Margaret');
```
Perché funziona bene: il motore filtra prima tutti i `Smith` (alta riduzione) e poi cerca i first_name richiesti nel sottoinsieme.

Se l'indice fosse `(first_name, last_name)` la ricerca dovrebbe saltare tra i vari first_name e poi filtrare per last_name, spesso meno efficiente se `last_name` ha alta cardinalità ripetuta.

Synonyms: Multicolumn = Composite = Compound index.

#### Regole pratiche per scegliere l'ordine
1. Metti per primo la colonna usata più spesso da sola nelle query (LEFTMOST prefix).
2. Metti prima le colonne filtrate con uguaglianza (`=`), poi quelle con range (`>`, `<`, BETWEEN), poi quelle usate solo per ordinamento.
3. Evita di includere colonne che non compaiono nei filtri o negli `ORDER BY` (solo aumenta peso e costo di aggiornamento).
4. Se una colonna ha bassa selettività (es. `country = 'IT'` in un dataset quasi tutto italiano) NON metterla come prima.

#### Effetto "leftmost prefix"
Un indice `(city, age, status)` può essere usato efficientemente per:
`city` | `city, age` | `city, age, status` ma NON per `age` da sola o `status` da solo.
Per quelle servirebbe un altro indice o riorganizzare l'ordine se le query cambiano.

#### Quando creare due indici separati
Se fai molte query su `last_name` da sola e molte su `first_name` da sola, talvolta conviene:
```sql
CREATE INDEX customers_last_name_idx ON customers(last_name);
CREATE INDEX customers_first_name_idx ON customers(first_name);
```
piuttosto che un solo multicolonna, soprattutto se raramente le usi insieme.

#### Copertura (Covering Index)
In PostgreSQL se tutte le colonne richieste dalla query sono incluse nell'indice (chiave + INCLUDE), il motore può evitare di leggere le pagine della tabella (Index Only Scan) se le tuple sono visibili.
Esempio:
```sql
CREATE INDEX customers_last_name_first_name_email_idx
ON customers(last_name, first_name) INCLUDE (email);
```
Query:
```sql
SELECT last_name, first_name, email FROM customers WHERE last_name = 'Rossi';
```
→ Potenziale Index Only Scan.

#### Non esagerare
- Indici con troppe colonne rallentano scritture (`INSERT/UPDATE/DELETE`).
- Non creare indici multicolonna "onnicomprensivi" sperando di coprire tutto. Parti dai pattern reali (usa `EXPLAIN ANALYZE`).
- Un indice con 5–6 colonne raramente è giustificato; meglio più indici mirati.

#### Esempio riepilogativo
Scenario: ricerche frequenti del tipo:
```sql
SELECT * FROM orders
WHERE customer_id = $1
  AND order_date BETWEEN $2 AND $3
ORDER BY order_date DESC;
```
Indice consigliato:
```sql
CREATE INDEX orders_customer_date_idx ON orders(customer_id, order_date DESC);
```
Così copri uguaglianza + range + ordinamento.

#### Duplicati negli indici compositi
Un indice composito NON implica automaticamente unicità. Più righe possono avere gli stessi valori per le colonne indicizzate (es. più `Mario Rossi`). L'indice accelera la ricerca, non la blocca. Diventa bloccante solo se definisci:
```sql
CREATE UNIQUE INDEX customers_last_name_first_name_uq ON customers(last_name, first_name);
```
Questo in contesti reali è sconsigliato perché gli omonimi esistono. Usa invece:
```sql
CREATE INDEX customers_last_name_first_name_idx ON customers(last_name, first_name);
```
Mantieni una chiave primaria artificiale (`id`) per riferimenti e lascia l'indice composito non unico per performance.
Se ti serve ridurre i falsi positivi nelle ricerche puoi aggiungere un'altra colonna selettiva (es. `birth_date`):
```sql
CREATE INDEX customers_last_name_first_name_birth_idx ON customers(last_name, first_name, birth_date);
```
Solo se le query la usano realmente.


## Eliminare un Index

```sql
DROP INDEX idx_nome;
```

**Esempio:**
```sql
DROP INDEX idx_customers_email;
```

## Vantaggi e Svantaggi

### ✅ Vantaggi
- Velocizza query di ricerca e filtro
- Migliora performance su tabelle grandi
- Ottimizza `JOIN` e `ORDER BY`

### ❌ Svantaggi
- Rallenta `INSERT`, `UPDATE`, `DELETE` (l'indice va aggiornato)
- Occupa spazio su disco
- Troppi indici possono peggiorare le prestazioni

#### Perché NON indicizzare ogni colonna
Ogni indice aggiunge lavoro alle operazioni di scrittura:
- **INSERT**: senza indici la riga viene aggiunta; con indici ognuno va aggiornato/ri-bilanciato.
- **UPDATE**: se cambia una colonna indicizzata l'indice deve riflettere il nuovo valore; aggiornare solo colonne non indicizzate è più leggero, ma se il filtro usa l'indice la fase di ricerca è più veloce.
- **DELETE**: l'indice aiuta a trovare la riga ma poi deve rimuovere il riferimento e riorganizzarsi.

Costi cumulativi: con 6 indici su una tabella ogni scrittura impatta 6 strutture. Troppi indici = degrado I/O e maggiore tempo di autovacuum / manutenzione.

Strategia bulk load (grandi import):
1. `DROP INDEX` non essenziali
2. Carica i dati (INSERT massivo)
3. Ricrea indici (`CREATE INDEX CONCURRENTLY` se serve evitare lock estesi)

Quando evitare un indice:
- Colonne quasi statiche con bassa selettività (es. `stato = 'ATTIVO'` per il 95% delle righe)
- Colonne aggiornate frequentemente in flussi ad alta velocità (telemetria ad alta frequenza) se non filtrate
- Indici creati “preventivamente” senza query reali che li usino

Verifica sempre con `EXPLAIN ANALYZE` prima di aggiungere un nuovo indice e dopo averlo creato.

## Best Practices

- Crea indici su colonne usate frequentemente in `WHERE`, `JOIN`, `ORDER BY`
- Evita indici su colonne con pochi valori distinti (es. booleani)
- Monitora le query lente con `EXPLAIN ANALYZE`
- Non creare troppi indici inutilizzati

## Tipi di Index in PostgreSQL

### Primary Key e Unique
Automaticamente creati come indici:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,        -- crea automaticamente un indice B-Tree
  email VARCHAR(255) UNIQUE     -- crea automaticamente un indice Unique
);
```

### Full-Text Search Index
Per ricerche testuali avanzate:
```sql
CREATE INDEX idx_articles_content ON articles USING GIN(to_tsvector('english', content));
```

### Partial Index
Indice su un sottoinsieme di righe:
```sql
CREATE INDEX idx_active_users ON users(last_login) WHERE active = true;
```
Utile quando filtri spesso con una condizione specifica.

## Performance: EXPLAIN ANALYZE

Per verificare se un indice viene usato e analizzare le performance della query, usa `EXPLAIN ANALYZE`:

```sql
EXPLAIN ANALYZE SELECT * FROM customers WHERE email = 'test@example.com';
```

### Analisi dei risultati

#### Tipi di Scan
- **Seq Scan** (Sequential Scan): scansione completa della tabella, record per record → **lento**
- **Index Scan**: usa l'indice per trovare rapidamente i record → **veloce**
- **Bitmap Index Scan**: usa l'indice per creare una bitmap dei record da leggere → **efficiente per risultati multipli**

#### Metriche chiave
- **Planning Time**: tempo impiegato dal server per decidere il piano di esecuzione (usare indice o scansione completa?)
- **Execution Time**: tempo effettivo di esecuzione della query dopo aver scelto il piano

**Esempio senza indice:**
```
Seq Scan on customers  (cost=0.00..18334.00 rows=1 width=100) (actual time=45.123..89.456 rows=1 loops=1)
Planning Time: 0.123 ms
Execution Time: 89.567 ms
```

**Esempio con indice:**
```
Index Scan using idx_customers_email on customers  (cost=0.42..8.44 rows=1 width=100) (actual time=0.023..0.025 rows=1 loops=1)
Planning Time: 0.145 ms
Execution Time: 0.067 ms
```

### Impatto su database grandi

Su 1.000.000 di record:
- **Senza indice**: devi scorrere potenzialmente tutti i record
- **Con indice**: accesso diretto in ~20 operazioni (log₂n)

**Nota:** Su database piccoli la differenza è trascurabile, ma su dataset grandi (milioni di record) gli indici sono essenziali.

### Misurare la velocità (procedura pratica)
Per confrontare il beneficio reale di un indice:
1. Crea tabella di test e inserisci dati.
2. Esegui la query senza indice con `EXPLAIN ANALYZE`.
3. Crea l'indice appropriato.
4. Riesegui la stessa query con `EXPLAIN ANALYZE` e confronta "Execution Time", tipo di scan e costi.

Esempio completo:
```sql
-- 1. Tabella di test
CREATE TABLE measurements (
  id BIGSERIAL PRIMARY KEY,
  device_id INT NOT NULL,
  ts TIMESTAMPTZ NOT NULL,
  value NUMERIC
);

-- 2. Dati (simulazione rapida)
INSERT INTO measurements(device_id, ts, value)
SELECT (random()*50)::int,
       now() - (random()* interval '7 days'),
       random()*100
FROM generate_series(1, 500000);

-- 3. Query SENZA indice
EXPLAIN ANALYZE
SELECT * FROM measurements
WHERE device_id = 10
  AND ts BETWEEN now() - interval '1 day' AND now();

-- 4. Crea indice composito
CREATE INDEX measurements_device_ts_idx ON measurements(device_id, ts);

-- 5. Query CON indice
EXPLAIN ANALYZE
SELECT * FROM measurements
WHERE device_id = 10
  AND ts BETWEEN now() - interval '1 day' AND now();
```
Osserva differenze:
- Da `Seq Scan` → `Index Scan` / `Bitmap Index Scan`
- Riduzione drastica di cost (numeri prima di `rows=`)
- Abbassamento `Execution Time`

Consigli:
- Esegui due volte la query dopo aver creato l'indice (la prima può includere I/O non ancora in cache).
- Non giudicare solo il tempo assoluto: anche il piano scelto (tipo di scan) è indicativo.
- Usa `EXPLAIN (BUFFERS, ANALYZE)` per vedere letture da disco vs cache se necessario.

## Esempi pratici: Dati da PLC / Sensori

Quando si raccolgono campioni (telemetria) da dispositivi o PLC, ogni riga rappresenta tipicamente: identificativo segnale (tag), timestamp del campione, valore misurato, eventuali flag (allarmi, qualità).

### Modello 1: Primary Key Composta
Usa la combinazione `(tag_id, timestamp)` come chiave primaria se non avrai mai due campioni con stesso istante per lo stesso tag.
```sql
CREATE TABLE samples (
  tag_id      INT          NOT NULL,
  ts          TIMESTAMPTZ  NOT NULL,
  value       NUMERIC,
  quality     SMALLINT,
  alarm       BOOLEAN DEFAULT false,
  PRIMARY KEY (tag_id, ts)
);
```
Vantaggi:
- Impedisce duplicati logici
- Indice B-Tree automaticamente utile per: `WHERE tag_id = ? AND ts BETWEEN ...`
- Query per ultimo valore: `SELECT * FROM samples WHERE tag_id = ? ORDER BY ts DESC LIMIT 1;` (Index Scan efficiente)

Svantaggi:
- FK verso questa tabella richiedono due colonne
- Cambiare granularità temporale o logica richiede migrazione chiave

### Modello 2: Chiave Surrogata + Unique
Usa un `id` auto-increment e garantisci unicità logica con indice unique.
```sql
CREATE TABLE samples (
  id          BIGSERIAL PRIMARY KEY,
  tag_id      INT          NOT NULL,
  ts          TIMESTAMPTZ  NOT NULL,
  value       NUMERIC,
  quality     SMALLINT,
  alarm       BOOLEAN DEFAULT false,
  UNIQUE (tag_id, ts)
);
-- Indice composito aggiuntivo (se molte query su range temporali)
CREATE INDEX idx_samples_tag_ts ON samples(tag_id, ts);
```
Vantaggi:
- FK più semplici (`REFERENCES samples(id)`)
- Flessibilità se cambia la definizione di unicità

Svantaggi:
- Mantieni due indici (PK + UNIQUE + opzionale composito)
- Leggero overhead di scrittura

### Query Tipiche Ottimizzate
```sql
-- Trend ultimo minuto di un tag
SELECT ts, value FROM samples
WHERE tag_id = 42 AND ts >= now() - INTERVAL '1 minute'
ORDER BY ts;

-- Ultimo valore di ciascun tag (window function)
SELECT DISTINCT ON (tag_id) tag_id, ts, value
FROM samples
ORDER BY tag_id, ts DESC;

-- Campioni anomali (qualità scarsa)
SELECT * FROM samples WHERE quality < 50 AND tag_id = 42 AND ts BETWEEN $1 AND $2;
```
L'indice `(tag_id, ts)` rende tutte queste veloci (Bitmap/Index Scan).

### Indice Parziale per Allarmi
Se la maggior parte dei campioni ha `alarm = false`:
```sql
CREATE INDEX idx_samples_alarm_ts ON samples(ts) WHERE alarm = true;
-- Velocizza: SELECT * FROM samples WHERE alarm = true AND ts > now() - INTERVAL '1 hour';
```

### Quando NON indicizzare `value`
- Se è un numero continuo ad alta cardinalità e lo usi solo per aggregazioni (`AVG`, `MIN`, `MAX`) su range temporali; l'indice su `(tag_id, ts)` è già sufficiente
- Indicizza `value` solo se fai molte query tipo `WHERE value = 123.45` (raro) o range mirati su `value` senza filtro su tempo/tag.

### Partizionamento (scalabilità)
Per volumi enormi (miliardi di righe) valuta partizionare per intervalli di tempo:
```sql
CREATE TABLE samples (
  tag_id INT NOT NULL,
  ts     TIMESTAMPTZ NOT NULL,
  value  NUMERIC,
  PRIMARY KEY (tag_id, ts)
) PARTITION BY RANGE (ts);

CREATE TABLE samples_2025_11 PARTITION OF samples
  FOR VALUES FROM ('2025-11-01') TO ('2025-12-01');
```
Gli indici sulle partizioni restano locali e le query temporali saltano partizioni inutili (pruning).

### Checklist Decisionale
- Accessi sempre con `tag_id + intervallo tempo`? → PK composta `(tag_id, ts)`
- Ti servono riferimenti semplici da molte altre tabelle? → PK surrogata + `UNIQUE(tag_id, ts)` + indice composito
- Molte query su subset filtrato (`alarm = true`)? → Indice parziale
- Necessità di analisi full-text / JSON per metadati del campione? → Aggiungi GIN su campo JSONB separato

### Regola d'Oro
Definisci la chiave primaria per integrità; aggiungi indici solo dopo aver osservato query reali e verificato con `EXPLAIN ANALYZE`. Evita di indicizzare ogni colonna "frequente" per non degradare le scritture.

## Riepilogo Rapido
| Tema | Cosa fare | Evita |
|------|-----------|-------|
| Tipo predefinito | Usa B-Tree per quasi tutto | Hash salvo casi rari solo `=` |
| Full-text / JSONB | Usa GIN | Forzare B-Tree su testo libero |
| Geospaziale / range | Usa GiST | Indici generici non mirati |
| Naming | `tabella_col1_col2_idx` | Nomi generici (`idx1`) |
| Multicolonna | Ordine: uguaglianze → range → sort | Colonne mai usate nei filtri |
| Dati PLC | PK composta `(tag_id, ts)` o `UNIQUE` + indice | Indice su `value` continuo inutile |
| Allarmi | Indice parziale `WHERE alarm = true` | Indice su colonna boolean ovunque |
| Bulk load | Drop indici non critici, carica, ricrea | Caricare milioni di righe con tutti gli indici attivi |
| Misurazione | `EXPLAIN (ANALYZE, BUFFERS)` prima/dopo | Aggiungere indici “alla cieca” |
| Unicità nomi | Usa PK surrogate; composite non unique | Unique su `(first_name,last_name)` |

Checklist veloce prima di creare un indice:
- La query reale è lenta? (misurata)
- Filtra o ordina su questa colonna spesso?
- La selettività è sufficiente (>10–15% di riduzione)?
- Non c'è già un indice che copre il leftmost prefix?
- Beneficio di lettura > costo di scrittura previsto?

Comando diagnostico esteso:
```sql
EXPLAIN (ANALYZE, BUFFERS, COSTS, VERBOSE) <QUERY>;
```
Osserva: tipo di scan, tempi, buffer hit vs read.

Regola finale: ogni indice deve “guadagnarsi il posto” mostrando un miglioramento concreto nelle query critiche.

