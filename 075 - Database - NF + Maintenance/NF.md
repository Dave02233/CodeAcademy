# Normalizzazione dei Database: Appunti di Studio

La normalizzazione è il processo di organizzazione di un database per ridurre la ridondanza e migliorare l'integrità dei dati. In ambito accademico, si utilizzano le forme normali (1NF, 2NF, 3NF) per descrivere il livello di struttura di un database relazionale.

## Concetti Chiave

*   **NF (Normal Form):** Indica il livello di normalizzazione. Più alto è il numero, più il database è strutturato e protetto da anomalie.
*   **Anomalie:** Problemi che si verificano durante la gestione dei dati non normalizzati:
    *   *Anomalia di aggiornamento:* Modificare un dato richiede aggiornamenti multipli (rischio di incongruenza).
    *   *Anomalia di cancellazione:* Eliminare un dato causa la perdita involontaria di altre informazioni correlate.
    *   *Anomalia di inserimento:* Impossibilità di aggiungere un record perché mancano dati obbligatori (es. valori NULL non permessi).

---

## 1NF: Prima Forma Normale (First Normal Form)

Un database è in 1NF quando è **atomico**.

*   **Definizione:**
    *   Ogni cella deve contenere un **singolo valore**.
    *   Ogni riga deve essere unica.
    *   I dati non devono essere divisibili (come un atomo).
*   **Problema (Esempio Non-1NF):**
    *   Una colonna "Titolo Libro" che contiene due titoli separati da virgola (es. *"Il Signore degli Anelli, Lo Hobbit"*). Questo impedisce di recuperare informazioni specifiche per un solo libro.
*   **Soluzione:**
    *   Separare i valori multipli in righe distinte. Ogni libro deve avere la sua riga dedicata.

---

## 2NF: Seconda Forma Normale (Second Normal Form)

Un database è in 2NF quando soddisfa la 1NF **E** non ha **dipendenze parziali**.

*   **Definizione di Dipendenza Parziale:**
    *   Si verifica quando un attributo (colonna) dipende solo da *una parte* della chiave primaria composta, non dall'intera chiave.
*   **Esempio di Problema:**
    *   In una tabella unica con libri e autori, l'ID Autore e i dati dell'autore dipendono parzialmente dall'ID Libro. Questo crea ridondanza (i dati dell'autore sono ripetuti per ogni suo libro).
*   **Soluzione:**
    *   Dividere la tabella in due: una per i **Libri** e una per gli **Autori**.
    *   Usare chiavi esterne (Foreign Keys) per collegarle.
*   **Benefici:**
    *   **Evita l'anomalia di aggiornamento:** Se l'indirizzo di un autore cambia, si aggiorna una sola volta nella tabella *Autori*, non su ogni riga dei suoi libri.
    *   **Evita l'anomalia di cancellazione:** Cancellare tutti i libri di un autore non comporta la cancellazione dei dati anagrafici dell'autore stesso.

---

## 3NF: Terza Forma Normale (Third Normal Form)

Un database è in 3NF quando soddisfa la 2NF **E** non ha **dipendenze funzionali transitive**.

*   **Definizione di Dipendenza Transitiva:**
    *   Si verifica quando un attributo non chiave dipende da un altro attributo non chiave (invece che dalla chiave primaria).
    *   Esempio: Libro -> Autore -> Indirizzo Autore. L'indirizzo dipende dall'Autore, non direttamente dal Libro.
*   **Soluzione:**
    *   Creare tabelle separate per le dipendenze transitive.
    *   Nell'esempio del testo: Creare una tabella separata per gli **Indirizzi** e collegarla alla tabella *Autori*.
*   **Benefici:**
    *   Gestione più efficiente di dati condivisi (es. più autori nello stesso edificio).
    *   **Evita l'anomalia di inserimento:** Separare dati come le "Vendite" permette di inserire un libro nel database anche se non ha ancora dati di vendita (evitando campi NULL che bloccano l'inserimento).

---

## Oltre la 3NF

Esistono livelli di normalizzazione più avanzati e specifici, frutto della ricerca continua sui database relazionali:
*   **BCNF (Boyce-Codd Normal Form)**
*   **4NF, 5NF**
*   **6NF** (teorico)

## Conclusione

L'obiettivo della normalizzazione è strutturare il database per renderlo relazionale e robusto. Sebbene richieda la creazione di più tabelle e relazioni, la best practice è puntare al livello di normalizzazione più alto possibile per prevenire errori nella gestione quotidiana dei dati (aggiornamenti, inserimenti, cancellazioni).

