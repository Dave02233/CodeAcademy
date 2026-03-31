# Concorrenza in Python: Thread, Processi e i 3 moduli principali

## Processo vs Thread

| | Processo | Thread |
|---|---|---|
| **Memoria** | Spazio di memoria isolato e indipendente | Condivide la memoria con il processo padre |
| **Peso** | Pesante (overhead elevato) | Leggero, creazione più rapida |
| **Comunicazione** | Tramite pipe, queue, shared memory | Diretta (memoria condivisa) |
| **Crash** | Un crash non influenza altri processi | Un crash può abbattere l'intero processo |
| **Isolamento** | Totale | Nessuno |

> In sintesi: il **processo** è il contenitore (programma in esecuzione), il **thread** è l'unità
> di esecuzione *dentro* quel contenitore.

---

## I 3 moduli di concorrenza in Python

### `multiprocessing`
- Crea **processi separati**, ognuno con la propria memoria e il proprio interprete Python
- Bypassa il **GIL** (Global Interpreter Lock), ottenendo **vero parallelismo**
- Ideale per task **CPU-bound** (calcoli intensivi, ML, elaborazione dati)
- Overhead elevato: creare un processo è costoso

```python
from multiprocessing import Process

def lavoro():
    print("Processo figlio")

p = Process(target=lavoro)
p.start()
p.join()
```

### `threading`
- Crea **thread** all'interno dello stesso processo, con memoria condivisa
- **Non bypassa il GIL**: in CPython, un solo thread esegue bytecode Python alla volta
- Utile per task **I/O-bound** (richieste HTTP, lettura file, DB) dove il thread aspetta
- Non ottieni vero parallelismo per codice CPU-intensivo

```python
from threading import Thread

def lavoro():
    print("Thread in esecuzione")

t = Thread(target=lavoro)
t.start()
t.join()
```

### `asyncio`
- **Single-threaded**, basato su un **event loop** e **cooperative multitasking**
- I task cedono il controllo esplicitamente con `await` quando sono in attesa
- Ideale per task **I/O-bound** con altissima concorrenza (es. migliaia di richieste HTTP)
- Più efficiente di `threading` per I/O: nessun overhead di context switching del SO
- Richiede sintassi `async/await` e librerie compatibili

```python
import asyncio

async def lavoro():
    await asyncio.sleep(1)
    print("Task completato")

asyncio.run(lavoro())
```

---

## Quando usare cosa

| Scenario | Modulo consigliato |
|---|---|
| Calcoli CPU intensivi (ML, encoding, ecc.) | `multiprocessing` |
| Richieste HTTP, query DB, lettura file | `asyncio` (preferito) o `threading` |
| Integrazione con librerie sync legacy | `threading` |
| Migliaia di connessioni simultanee | `asyncio` |

---

## Il GIL in breve

Il **Global Interpreter Lock** è un mutex in CPython che permette a **un solo thread** di
eseguire bytecode Python alla volta. Per questo:
- `threading` **non** offre parallelismo reale su task CPU-bound
- `multiprocessing` lo **bypassa** usando processi separati
- `asyncio` lo **ignora** perché è single-threaded by design