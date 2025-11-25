
## Differenza fra SEEK e SEARCH in Postgres

In PostgreSQL, i termini **seek** e **search** si riferiscono a due concetti diversi nell'accesso ai dati:

### SEEK
Il termine "seek" viene utilizzato principalmente per descrivere l'operazione di spostamento del puntatore del file a una posizione specifica all'interno di un indice o di una tabella. Ad esempio, quando PostgreSQL utilizza un indice B-Tree, può effettuare un "seek" per trovare rapidamente la posizione di una chiave specifica senza dover scansionare tutte le righe. Il seek è quindi un'operazione efficiente che sfrutta la struttura dell'indice per accedere direttamente ai dati.

### SEARCH
"Search" indica invece l'operazione di ricerca di uno o più valori all'interno di una tabella o di un indice. Può essere una ricerca sequenziale (scansione) o una ricerca tramite indice. La search può coinvolgere più "seek" se si cercano più valori, oppure può essere una scansione completa se non ci sono indici disponibili.

**In sintesi:**
- **Seek** = movimento diretto verso una posizione nota (tipicamente tramite indice)
- **Search** = ricerca di uno o più valori, che può includere uno o più seek oppure una scansione completa

Questi termini sono spesso usati nell'analisi delle performance delle query e nei piani di esecuzione di PostgreSQL.
