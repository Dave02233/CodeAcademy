# Database Maintenance

## Monitorare le Dimensioni

### Dimensione Database
```sql
-- Lista tutti i database con dimensione
SELECT 
  datname AS database_name,
  pg_size_pretty(pg_database_size(datname)) AS size
FROM pg_database
ORDER BY pg_database_size(datname) DESC;

-- Dimensione del database corrente
SELECT pg_size_pretty(pg_database_size(current_database()));
```

### Dimensione Tabelle
```sql
-- Top 10 tabelle più grandi (include indici e toast)
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS total_size,
  pg_size_pretty(pg_relation_size(schemaname||'.'||tablename)) AS table_size,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename) - pg_relation_size(schemaname||'.'||tablename)) AS indexes_size
FROM pg_tables
WHERE schemaname NOT IN ('pg_catalog', 'information_schema')
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC
LIMIT 10;
```

**Spiegazione colonne:**
- `total_size`: tabella + indici + TOAST (dati grandi fuori riga)
- `table_size`: solo dati della tabella
- `indexes_size`: spazio occupato dagli indici

### Dimensione Indici Specifici
```sql
-- Indici di una tabella specifica
SELECT 
  indexname,
  pg_size_pretty(pg_relation_size(schemaname||'.'||indexname)) AS index_size
FROM pg_indexes
WHERE tablename = 'samples'
ORDER BY pg_relation_size(schemaname||'.'||indexname) DESC;
```

### Spazio Libero e Bloat
```sql
-- Verifica bloat (spazio sprecato da tuple morte)
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size,
  n_dead_tup AS dead_tuples,
  n_live_tup AS live_tuples,
  round(n_dead_tup * 100.0 / NULLIF(n_live_tup + n_dead_tup, 0), 2) AS dead_ratio_pct
FROM pg_stat_user_tables
WHERE n_live_tup > 0
ORDER BY n_dead_tup DESC
LIMIT 10;
```
Se `dead_ratio_pct` > 10–20%, considera `VACUUM` o `VACUUM FULL`.

---

## Backup e Restore

### Backup con pg_dump

#### Backup Database Completo
```bash
# Formato custom (compresso, flessibile per restore selettivo)
pg_dump -h localhost -U postgres -d nome_database -F c -f backup_database.dump

# Formato SQL plain text (leggibile, editabile)
pg_dump -h localhost -U postgres -d nome_database -f backup_database.sql

# Con compressione gzip
pg_dump -h localhost -U postgres -d nome_database | gzip > backup_database.sql.gz
```

#### Backup Solo Schema (senza dati)
```bash
pg_dump -h localhost -U postgres -d nome_database --schema-only -f schema_only.sql
```

#### Backup Solo Dati
```bash
pg_dump -h localhost -U postgres -d nome_database --data-only -f data_only.sql
```

#### Backup di una Singola Tabella
```bash
pg_dump -h localhost -U postgres -d nome_database -t samples -F c -f backup_samples.dump
```

#### Backup di Tutte le Basi Dati (cluster)
```bash
pg_dumpall -h localhost -U postgres -f backup_all_databases.sql
```

**Opzioni utili:**
- `-F c`: formato custom (consigliato, compresso)
- `-F p`: formato plain SQL
- `-j 4`: parallelizza con 4 job (solo formato directory `-F d`)
- `--verbose`: mostra progressi
- `--no-owner`: non include comandi per owner (utile per restore su altro server)

### Restore con pg_restore / psql

#### Restore da formato custom
```bash
# Ripristino completo
pg_restore -h localhost -U postgres -d nome_database -c -v backup_database.dump

# Ripristino di una sola tabella
pg_restore -h localhost -U postgres -d nome_database -t samples backup_database.dump
```

**Opzioni utili:**
- `-c` o `--clean`: droppa oggetti esistenti prima del restore
- `-C`: crea il database (usa con `-d postgres` per connettersi prima)
- `-j 4`: parallelo (velocizza su dump multi-file)
- `--no-owner`: ignora assegnazione proprietà
- `--if-exists`: usa `DROP IF EXISTS` (evita errori se oggetto mancante)

#### Restore da SQL plain
```bash
# Formato SQL
psql -h localhost -U postgres -d nome_database -f backup_database.sql

# Da gzip
gunzip -c backup_database.sql.gz | psql -h localhost -U postgres -d nome_database
```

#### Creare DB e poi restore
```bash
createdb -h localhost -U postgres nuovo_database
pg_restore -h localhost -U postgres -d nuovo_database backup_database.dump
```

### Backup Automatico (Script)
Esempio script bash per backup giornaliero:
```bash
#!/bin/bash
BACKUP_DIR="/var/backups/postgres"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="production_db"

mkdir -p $BACKUP_DIR
pg_dump -h localhost -U postgres -d $DB_NAME -F c -f $BACKUP_DIR/${DB_NAME}_${DATE}.dump

# Rimuovi backup più vecchi di 7 giorni
find $BACKUP_DIR -name "${DB_NAME}_*.dump" -mtime +7 -delete
```

Aggiungi a cron:
```bash
# Esegui ogni giorno alle 2:00 AM
0 2 * * * /path/to/backup_script.sh
```

### Best Practices Backup
- Usa formato custom (`-F c`) per flessibilità restore selettivo
- Testa i restore periodicamente
- Conserva backup off-site (cloud, altro server)
- Backup incrementali per DB enormi (considera WAL archiving + PITR)
- Backup prima di migrazioni/upgrade critici
- Monitora spazio disco per i backup

### PITR (Point-in-Time Recovery)
Per database mission-critical, abilita archivio WAL:
```ini
# postgresql.conf
wal_level = replica
archive_mode = on
archive_command = 'cp %p /var/lib/postgresql/wal_archive/%f'
```
Poi combina backup base + replay WAL per restore a un timestamp esatto.

---

## Manutenzione Indici

### REINDEX
Ricostruisce indici corrotti o con bloat:
```sql
-- Singolo indice
REINDEX INDEX customers_email_idx;

-- Tutti gli indici di una tabella
REINDEX TABLE samples;

-- Intero database (attento: lock pesanti)
REINDEX DATABASE nome_database;

-- Versione concorrente (PostgreSQL 12+, no lock estesi)
REINDEX INDEX CONCURRENTLY customers_email_idx;
```

### VACUUM e ANALYZE
```sql
-- Libera spazio da tuple morte
VACUUM samples;

-- Full vacuum (riscrive tutta la tabella, lock esclusivo)
VACUUM FULL samples;

-- Aggiorna statistiche per query planner
ANALYZE samples;

-- Entrambi
VACUUM ANALYZE samples;
```

**Autovacuum**: PostgreSQL esegue VACUUM automaticamente. Verifica configurazione:
```sql
SHOW autovacuum;
SELECT * FROM pg_stat_user_tables WHERE relname = 'samples';
```

### Monitorare Indici Inutilizzati
```sql
SELECT 
  schemaname,
  tablename,
  indexname,
  idx_scan AS index_scans,
  pg_size_pretty(pg_relation_size(indexrelid)) AS index_size
FROM pg_stat_user_indexes
WHERE idx_scan = 0
  AND indexrelname NOT LIKE '%_pkey'
ORDER BY pg_relation_size(indexrelid) DESC;
```
Considera drop di indici mai usati (verifica periodo osservazione).

### Rigenerare Statistiche
```sql
-- Se query plan inefficiente dopo molti cambiamenti
ANALYZE VERBOSE samples;
```
