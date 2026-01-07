# Introduzione a YAML

YAML (YAML Ain't Markup Language) è un formato di serializzazione dei dati leggibile dall'uomo, spesso usato per file di configurazione, definizioni di infrastruttura e scambio di dati tra servizi. È progettato per essere più leggibile rispetto a JSON quando si scrivono configurazioni manualmente, pur essendo facilmente convertibile in strutture dati nei linguaggi di programmazione.

## A cosa serve
- File di configurazione (es. applications, CI/CD, Docker Compose).
- Definizione di risorse (es. Kubernetes manifests, CloudFormation/ARM-like templates).
- Serializzazione di dati leggibili per persone e macchine (es. OpenAPI in YAML).

## Principi base di sintassi
- Indentazione: usa spazi per indentare (consigliati 2 spazi); i tab non sono permessi.
- Key/value: `chiave: valore`.
- Commenti: iniziano con `#` e proseguono fino a fine riga.
- Case-sensitive: i nomi delle chiavi sono sensibili alle maiuscole/minuscole.

Esempio semplice:

```yaml
name: Mario Rossi
age: 34
active: true # commento
```

## Tipi di dati
- Scalare: stringhe, numeri, booleani (`true`/`false`), `null`.
- Sequenze (liste): indicatore con `-` in riga propria.
- Mapping (oggetti/dizionari): coppie chiave: valore, possono essere annidate.

Esempio con sequenza e mapping:

```yaml
servers:
	- url: https://api.example.com
		name: production
	- url: https://staging.example.com
		name: staging

database:
	host: db.example.local
	port: 5432
```

## Stringhe multilinea
- `|` conserva i ritorni a capo.
- `>` converte i ritorni a capo in spazi (folded).

Esempio:

```yaml
description_block: |
	Questa è una descrizione su più righe.
	I ritorni a capo vengono preservati.

description_folded: >
	Questa è una descrizione su più righe
	ma viene 'folded' in una singola riga.
```

## Alias e anchor
- Permettono di riusare pezzi di YAML tramite `&anchor` e `*alias`.

```yaml
default: &def
	timeout: 30
	retries: 3

serviceA:
	<<: *def
	url: https://service-a/

serviceB:
	<<: *def
	url: https://service-b/
```

## Flow style vs Block style
- Block (strumentali per la leggibilità) è il formato tipico mostrato sopra.
- Flow (simile a JSON) usa parentesi e virgole: `[{a: 1}, {b: 2}]`.

## Compatibilità con JSON
Ogni documento JSON valido è anche YAML valido (subset), quindi conversioni tra i due sono facili.

## Best practice
- Usa spazi (non tab) e mantieni indentazione coerente (2 spazi è comune).
- Valida i file con `yamllint` e, se usi schemi, con strumenti come `kubeval` o `pykwalify`.
- Evita ancore/alias eccessivi se rendono il file difficile da leggere.
- Non inserire segreti in chiaro: usa secret manager o meccanismi di cifratura.

## Strumenti utili
- `yq` per manipolare YAML da CLI.
- `yamllint` per linting.
- `kubeval`/`conftest` per validare secondo policy/schemi.

## Esempio completo (config applicazione)

```yaml
app:
	name: my-app
	environment: production

logging:
	level: info
	destinations:
		- stdout
		- file: /var/log/my-app.log

features:
	- auth
	- metrics

databases:
	primary:
		host: db.internal
		port: 5432
		user: myapp
		password: "${DB_PASSWORD}" # usare secret manager
```

---

Se vuoi, aggiungo esempi pratici (Kubernetes, Docker Compose, OpenAPI YAML) o traduco in inglese. Dimmi quale preferisci.

