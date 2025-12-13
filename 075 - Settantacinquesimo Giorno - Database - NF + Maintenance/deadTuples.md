
# Riepilogo: Dead Tuples in PostgreSQL

## Cosa Sono e Perché si Formano

I **Dead Tuples** sono versioni obsolete di righe in PostgreSQL, generate da `UPDATE` e `DELETE` . A causa del sistema **MVCC (Multi-Version Concurrency Control)**, invece di cancellare i dati fisicamente, il database li marca come "morti". Questo permette letture consistenti senza bloccare le tabelle.

## Problema Principale: il "Bloat"

L'accumulo di dead tuples causa il **"bloat"** (gonfiore) di tabelle e indici. Questo porta a:

- Spreco di spazio su disco.
- Rallentamento delle query, poiché il database deve leggere e scartare dati inutili [web:1].

## Manutenzione e Soluzioni

La pulizia è gestita dal processo `VACUUM`.

### 1. Autovacuum

È il processo automatico e predefinito che pulisce i dead tuples quando viene superata una certa soglia. È la soluzione principale e non blocca le operazioni [web:1][web:5].

### 2. Comandi Manuali

- **`VACUUM [tabella]`**: Recupera spazio rendendolo riutilizzabile, ma non riduce la dimensione del file della tabella. Non blocca le operazioni di lettura/scrittura [web:3].
- **`VACUUM FULL [tabella]`**: Riscrive l'intera tabella, rimuovendo il bloat e riducendo la dimensione del file. **Richiede un blocco esclusivo** ed è un'operazione da eseguire con cautela [web:3].
- **`VACUUM ANALYZE`**: Esegue `VACUUM` e poi aggiorna le statistiche per il query planner. È una buona pratica [web:9].

### 3. Tuning di Autovacuum

Per tabelle con molti aggiornamenti, le impostazioni di default possono essere insufficienti. È possibile renderlo più aggressivo per una tabella specifica:

```sql
-- Rende autovacuum più frequente abbassando la soglia al 5%
ALTER TABLE nome_tabella SET (autovacuum_vacuum_scale_factor = 0.05);
```

### 4. Monitoraggio

Controlla lo stato dei dead tuples e l'attività di autovacuum con questa query:

```sql
SELECT 
    relname AS tabella, 
    n_live_tup AS righe_attive, 
    n_dead_tup AS righe_morte, 
    last_autovacuum
FROM pg_stat_user_tables 
WHERE n_dead_tup > 0 
ORDER BY n_dead_tup DESC;
```
