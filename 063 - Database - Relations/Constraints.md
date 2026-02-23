Un **constraint** in PostgreSQL è una regola applicata a una colonna o tabella per garantire l'integrità dei dati (ad esempio, vincoli di unicità, chiavi primarie, chiavi esterne, valori non nulli).

Per visualizzare i constraint di una tabella, puoi usare la seguente query:

### Standard SQL
```sql
SELECT conname, contype
FROM pg_constraint
WHERE conrelid = 'nome_tabella'::regclass;
```

### PostgreSQL
```sql
SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'book';
```


Sostituisci `nome_tabella` con il nome della tabella di interesse.