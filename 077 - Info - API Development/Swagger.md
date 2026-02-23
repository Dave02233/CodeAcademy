## Cos'è Swagger / OpenAPI

Swagger era il nome di un insieme di strumenti e di una specifica per descrivere API HTTP. La specifica è stata poi rinominata in OpenAPI Specification (OAS). "Swagger" è rimasto come nome commerciale per diversi tool (Swagger UI, Swagger Editor, Swagger Codegen) mentre "OpenAPI" indica lo standard della specifica (versioni: 2.0, 3.x).

OpenAPI è un formato (JSON o YAML) per descrivere contratti API: endpoint, metodi HTTP, parametri, schemi delle richieste e risposte, codici di errore e meccanismi di sicurezza. Usare OpenAPI/Swagger significa avere un contratto leggibile dalle persone e dalle macchine.

## Perché usarlo
- Documentazione interattiva automaticamente generata (Swagger UI, ReDoc).
- Contract-first development: server e client possono essere generati o mockati dalle specifiche.
- Validazione e testing automatico (contract tests), generazione automatica di SDK e client.
- Migliore onboarding per sviluppatori esterni e interni.

## Componenti e concetti principali
- `openapi` / `swagger`: versione della specifica.
- `info`: titolo, versione, contatti della API.
- `servers`: URL base dell'API.
- `paths`: definizione degli endpoint e dei metodi HTTP.
- `components` (o `definitions` in OAS 2): schemi riutilizzabili (`schemas`), `securitySchemes`, `responses` comuni.
- `security`: come applicare autenticazione (OAuth2, API Key, HTTP Bearer/JWT).

## Strumenti comuni
- `Swagger UI`: visualizza una specifica OpenAPI in documentazione interattiva.
- `Swagger Editor`: editor online/locale per scrivere e validare OAS.
- `Swagger Codegen` / `OpenAPI Generator`: genera client/server SDK da una specifica.
- `ReDoc`: alternativa a Swagger UI per documentazione più ricca.
- `SwaggerHub`: hosting collaborativo per specifiche.

## Best practice
- Preferire OAS 3.x per nuove API; mantenere le specifiche sincronizzate col codice (CI che valida la spec).
- Usare contract-first quando possibile per evitare divergence tra implementazione e doc.
- Documentare esempi di request/response e casi di errore.
- Proteggere le specifiche che contengono informazioni sensibili (es. URL interni o esempi con segreti).

## Esempio OpenAPI minimale (YAML)

```yaml
openapi: 3.0.3
info:
	title: Esempio API
	version: 1.0.0
	description: API di esempio minima
servers:
	- url: https://api.example.com/v1
paths:
	/hello:
		get:
			summary: Saluta l'utente
			responses:
				'200':
					description: OK
					content:
						application/json:
							schema:
								type: object
								properties:
									message:
										type: string
										example: "Hello, world!"
```

Per visualizzare questa specifica localmente, salva il file `openapi.yaml` e aprilo con `Swagger UI` o incollalo in `https://editor.swagger.io`.

---

Se vuoi, posso: 1) generare un esempio più completo (security, request body, error responses), 2) convertire la specifica in JSON, o 3) creare un mock server basato sull'OpenAPI. Quale preferisci?

