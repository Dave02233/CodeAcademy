# Trigger in PostgreSQL: BEFORE vs AFTER

Questo file spiega la differenza tra i trigger di tipo `BEFORE` e `AFTER` in PostgreSQL, quando usarli e fornisce esempi pratici.

## Che cos'è un trigger?

Un *trigger* è una funzione che viene eseguita automaticamente dal database in risposta a determinati eventi (es. `INSERT`, `UPDATE`, `DELETE`) su una tabella. I trigger possono essere utili per validazioni, popolazione di campi derivati, audit, mantenimento di viste/materialized views, e altro.

## WHEN: BEFORE vs AFTER

- `BEFORE`: il trigger viene eseguito **prima** che l'operazione (INSERT/UPDATE/DELETE) sia effettivamente applicata ai dati. Permette di modificare i valori che verranno scritti (ad es. normalizzare campi), o di annullare l'operazione restituendo `NULL` in trigger row-level per INSERT/UPDATE.
- `AFTER`: il trigger viene eseguito **dopo** che l'operazione è stata applicata con successo. Non può modificare i valori già scritti (per row-level). È utile per azioni che devono vedere lo stato finale consistente del database, come aggiornare tabelle correlate o scrivere record in tabelle di log.

## Row-level vs Statement-level

I trigger possono essere di due tipi:
- **ROW-level** (`FOR EACH ROW`): eseguiti una volta per ogni riga interessata.
- **STATEMENT-level** (`FOR EACH STATEMENT`): eseguiti una volta per l'intera istruzione, indipendentemente dal numero di righe coinvolte.

Nota: il comportamento `BEFORE`/`AFTER` si applica sia a trigger row-level che statement-level.

## NEW e OLD nei trigger row-level

Nei trigger row-level PostgreSQL espone due variabili speciali che rappresentano i valori delle righe coinvolte:

- `NEW`: rappresenta la nuova riga che verrà inserita o aggiornata. È disponibile nei trigger `INSERT` e `UPDATE`.
- `OLD`: rappresenta la riga prima della modifica o cancellazione. È disponibile nei trigger `UPDATE` e `DELETE`.

Regole pratiche:
- Le variabili `NEW` e `OLD` sono disponibili **solo** nei trigger dichiarati `FOR EACH ROW`. Nei trigger `FOR EACH STATEMENT` non sono presenti.
- In un trigger `BEFORE` puoi modificare `NEW` per cambiare i valori che saranno scritti (es. normalizzare testo, calcolare campi derivati). Se un `BEFORE INSERT` o `BEFORE UPDATE` restituisce `NULL`, l'operazione sulla singola riga viene annullata.
- In un trigger `BEFORE DELETE` puoi esaminare `OLD` e, se necessario, impedire la cancellazione sollevando un'eccezione o restituendo `OLD`.
- In un trigger `AFTER` i valori sono già stati scritti: modificare `NEW` non ha effetto sulla riga già salvata. Il valore di ritorno di un trigger `AFTER` row-level è generalmente ignorato.

Disponibilità per tipo di operazione:
- `INSERT`: `NEW` è presente; `OLD` non è presente.
- `UPDATE`: `OLD` e `NEW` sono presenti.
- `DELETE`: `OLD` è presente; `NEW` non è presente.

Esempio pratico:
- In un `BEFORE UPDATE` puoi fare `NEW.updated_at := now(); RETURN NEW;` per impostare la timestamp di aggiornamento.
- In un `AFTER INSERT` non puoi modificare direttamente la riga appena inserita tramite `NEW`, ma puoi registrare un audit log o lanciare attività esterne.

## Differenze pratiche e implicazioni

- Controllo dei valori: `BEFORE` consente di modificare `NEW` (per INSERT/UPDATE) o anche di impedire l'operazione. `AFTER` non può cambiare i valori della riga che è stata salvata.
- Visibilità dei dati: in un trigger `AFTER`, le modifiche sono già persistite e visibili ad altri trigger o processi (se la transazione è ancora in corso, però, non saranno visibili esternamente finché la transazione non viene committata). `BEFORE` vede lo stato precedente e il nuovo `NEW` prima della scrittura.
- Error handling: se un trigger `AFTER` fallisce, l'intera transazione viene annullata (rollback). Lo stesso vale per `BEFORE`. Tuttavia, usare `AFTER` per compiti che falliscono frequentemente può costare di più, perché hai già eseguito la scrittura.
- Performance: `BEFORE` può essere più efficiente quando vuoi evitare scritture non necessarie (es. validazione che blocca l'INSERT prima di scrivere). `AFTER` viene usato quando l'azione richiede il risultato finale o quando si devono aggiornare altre tabelle dipendenti.

## Esempi in PostgreSQL

1) Trigger BEFORE - normalizzare un campo email prima dell'inserimento:

```sql
CREATE FUNCTION users_normalize_email() RETURNS trigger AS $$
BEGIN
  NEW.email := lower(trim(NEW.email));
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_normalize_email
BEFORE INSERT OR UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION users_normalize_email();
```

2) Trigger AFTER - registrare in una tabella di audit dopo un INSERT:

```sql
CREATE FUNCTION users_audit_insert() RETURNS trigger AS $$
BEGIN
  INSERT INTO users_audit(user_id, action, changed_at)
  VALUES (NEW.id, 'insert', now());
  RETURN NULL; -- per AFTER triggers il valore di ritorno è ignorato per ROW-level
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_users_audit_insert
AFTER INSERT ON users
FOR EACH ROW
EXECUTE FUNCTION users_audit_insert();
```

3) Esempio di uso per `DELETE`: BEFORE per impedire cancellazioni non autorizzate

```sql
CREATE FUNCTION prevent_delete_if_active() RETURNS trigger AS $$
BEGIN
  IF OLD.status = 'active' THEN
    RAISE EXCEPTION 'Impossibile cancellare un record ancora attivo';
  END IF;
  RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_prevent_delete
BEFORE DELETE ON subscriptions
FOR EACH ROW
EXECUTE FUNCTION prevent_delete_if_active();
```

## Consigli pratici

- Usa `BEFORE` quando vuoi validare o modificare i dati prima della scrittura.
- Usa `AFTER` quando devi reagire allo stato finale (es. aggiornare tabelle correlate, inviare notifiche, scrivere audit log). 
- Evita di eseguire operazioni pesanti direttamente nei trigger `AFTER`; valuta di mettere lavori pesanti in code (ad es. NOTIFY + listener, o job queue esterno).
- Documenta sempre i trigger: sono codice "nascosto" che può sorprendere chi non lo conosce.

## Nota sulla concorrenza

Entrambi i tipi di trigger vengono eseguiti all'interno della stessa transazione dell'istruzione che li ha attivati. Se il trigger genera un errore, l'intera transazione viene rollbackata.

---

File creato: spiegazione su BEFORE vs AFTER triggers in PostgreSQL con esempi pratici.
