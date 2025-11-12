# 🐘 Introduzione ai Superuser in PostgreSQL

## 📌 Utente e Database iniziali

Quando si crea un nuovo server PostgreSQL, viene generato:

- Un singolo database
- Un singolo utente, solitamente chiamato `postgres`

Per verificare il nome dell’utente attualmente connesso, si può eseguire:

```sql
SELECT current_user;
```

## 👑 Chi è il Superuser?

L’utente `postgres` (o qualsiasi altro utente iniziale) ha il potere di:

- Creare nuovi database
- Creare tabelle
- Creare altri utenti
- Eseguire qualsiasi operazione senza restrizioni

In PostgreSQL, un utente con questi privilegi è chiamato **superuser**. Questo tipo di utente **bypassa tutti i controlli di autorizzazione**.

> Nelle lezioni di Codecademy, il superuser è spesso chiamato `ccuser`.

## ⚠️ Attenzione ai Superuser

I privilegi di superuser **non sono limitati a un solo utente**: possono essere assegnati a più utenti. Tuttavia, si tratta di un potere molto delicato e potenzialmente pericoloso.

### 🔐 Principio del Minimo Privilegio

Secondo questo principio, ogni utente o applicazione dovrebbe avere **solo i permessi strettamente necessari** per svolgere le proprie funzioni.

### ✅ Buone pratiche in PostgreSQL

Per rispettare questo principio:

- Limitare i privilegi della maggior parte degli utenti
- Evitare che i superuser svolgano compiti di routine
- Creare ruoli specializzati con permessi specifici e limitati

---

# 🔧 Gestione dei Permessi in PostgreSQL

Per implementare il principio del minimo privilegio, PostgreSQL consente di:

- **Creare ruoli** con permessi specifici
- **Assegnare ruoli** agli utenti
- **Revocare permessi** non necessari

## 📘 Comandi utili

### Creare un nuovo utente

```sql
CREATE USER nome_utente WITH PASSWORD 'password';
```

### Creare un ruolo

```sql
CREATE ROLE nome_ruolo;
```

### Assegnare un ruolo a un utente

```sql
GRANT nome_ruolo TO nome_utente;
```

### Assegnare permessi su una tabella

```sql
GRANT SELECT, INSERT ON nome_tabella TO nome_utente;
```

### Revocare permessi

```sql
REVOKE INSERT ON nome_tabella FROM nome_utente;
```

---

# 🗂️ Tipi di Permessi nei Ruoli PostgreSQL

| Nome Permesso | Funzione |
|---------------|----------|
| `SUPERUSER`   | Il ruolo ha privilegi da superuser? |
| `CREATEROLE`  | Il ruolo può creare altri ruoli? |
| `CREATEDB`    | Il ruolo può creare database? |
| `LOGIN`       | Il ruolo può effettuare login? |
| `IN ROLE`     | Elenco di ruoli esistenti a cui il ruolo sarà aggiunto come membro |

Questi attributi possono essere specificati al momento della creazione del ruolo o modificati successivamente con comandi come:

```sql
ALTER ROLE nome_ruolo WITH CREATEDB;
```

Oppure per rimuovere un permesso:

```sql
ALTER ROLE nome_ruolo WITH NOLOGIN;
```

---

# 🧱 Permessi su Schemi e Tabelle

Oltre a gestire chi può effettuare login o creare database e ruoli, i ruoli vengono utilizzati anche per controllare **quali schemi e tabelle gli utenti possono vedere e modificare**.

Ogni tabella o schema in PostgreSQL ha un **proprietario** che può impostare i permessi.

Come superuser o proprietario di uno schema o tabella, puoi usare i comandi `GRANT` e `REVOKE` per modificare i permessi a livello di schema e tabella.

## 🔐 Permessi sugli Schemi

Per usare uno schema, un ruolo deve avere il permesso `USAGE`. Senza `USAGE`, non può accedere alle tabelle contenute nello schema.

Altri permessi a livello di schema includono:


## 📊 Permessi sulle Tabelle

Per interagire con una tabella, un ruolo deve:

1. Avere `USAGE` sullo schema che contiene la tabella
2. Ricevere permessi specifici sulla tabella come `SELECT`, `UPDATE`, `DELETE`, `INSERT`, ecc.

### 🧪 Esempio pratico

Supponiamo che tu sia il proprietario dello schema `finance` e voglia concedere a un utente chiamato `analyst` la possibilità di **leggere (`SELECT`) e modificare (`UPDATE`)** la tabella `finance.revenue`.

#### 1. Concedere permessi sullo schema

```sql
GRANT USAGE, CREATE ON SCHEMA finance TO analyst;
```

#### 2. Concedere permessi sulla tabella

```sql
GRANT SELECT, UPDATE ON finance.revenue TO analyst;
```

> È possibile elencare più permessi in una singola istruzione `GRANT`.

### 🔄 Revocare permessi

Per revocare un permesso, basta sostituire `GRANT` con `REVOKE` e `TO` con `FROM`.  
Ad esempio, per revocare il permesso di `UPDATE`:

```sql
REVOKE UPDATE ON finance.revenue FROM analyst;
```


# 👥 Gruppi e Ereditarietà dei Ruoli in PostgreSQL

## 👥 Gruppi (Ruoli come Gruppi)

In PostgreSQL, i ruoli possono essere usati come "gruppi" per gestire permessi condivisi tra più utenti. Un gruppo è semplicemente un ruolo senza permesso di LOGIN, a cui altri utenti possono essere aggiunti come membri.

### Creare un gruppo:

```sql
CREATE ROLE nome_gruppo;
```

### Aggiungere un utente a un gruppo:

```sql
GRANT nome_gruppo TO nome_utente;
```

Gli utenti membri del gruppo ereditano i permessi assegnati al gruppo.

## 🧬 Ereditarietà dei Permessi

Per default, i permessi di un gruppo vengono ereditati dai suoi membri. Questo comportamento può essere modificato con l'attributo `INHERIT` o `NOINHERIT`.

- `INHERIT`: il ruolo eredita automaticamente i permessi dei gruppi di cui è membro (default)
- `NOINHERIT`: il ruolo NON eredita automaticamente i permessi dei gruppi

### Modificare l'ereditarietà:

```sql
ALTER ROLE nome_utente INHERIT;
ALTER ROLE nome_utente NOINHERIT;
```

> Usare i gruppi e l'ereditarietà permette di gestire facilmente permessi complessi e di mantenere la sicurezza secondo il principio del minimo privilegio.
