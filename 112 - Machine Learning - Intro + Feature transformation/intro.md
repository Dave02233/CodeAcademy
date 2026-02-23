### Cos'è il Machine Learning?

Il **Machine Learning** (o apprendimento automatico) è un sottoinsieme dell'intelligenza artificiale che permette ai computer di imparare dai dati senza essere esplicitamente programmati. 

Invece di scrivere regole rigide del tipo "se succede X, fai Y", fornisci al sistema molti esempi (dati) e gli permetti di trovare da solo schemi, regole e relazioni.

### Come funziona (in sintesi)

1.  **Raccolta Dati:** Si fornisce al sistema un set di dati (es. misurazioni di vibrazioni di motori industriali).
2.  **Addestramento (Training):** L'algoritmo analizza i dati per identificare dei pattern (es. come vibrano i motori poco prima di guastarsi).
3.  **Costruzione del Modello:** Il sistema crea una formula matematica o "modello" basato su ciò che ha imparato.
4.  **Predizione/Classificazione:** Si utilizzano nuovi dati (mai visti prima dal sistema) e il modello fa previsioni (es. "questo motore si guasterà entro una settimana").

### I 3 Tipi Principali

-   **Apprendimento Supervisionato:** Dai al sistema sia i dati di input che le risposte corrette (output). È come insegnare a un bambino usando delle flashcard. *(Es: Previsione guasti avendo già dati etichettati "guasto"/"funzionante")*.
-   **Apprendimento Non Supervisionato:** Dai al sistema solo dati, senza etichette, e gli chiedi di trovare dei gruppi o delle strutture nascoste. *(Es: Raggruppare i clienti in base alle abitudini d'acquisto)*.
-   **Apprendimento per Rinforzo:** Il sistema impara per tentativi ed errori ricevendo "premi" o "punizioni". *(Es: Addestrare un'IA a giocare a scacchi o a bilanciare un carico)*.

### Esempio Pratico: Manutenzione Predittiva

Invece di scrivere codice per dire a un sistema SCADA di allarmarsi quando la temperatura supera gli $$80^\circ\text{C}$$, usi il machine learning:
Fornisci al modello storico dati di temperatura, vibrazione e consumo elettrico di un inverter (come un G120X). Il modello impara da solo che una combinazione specifica di questi tre fattori, anche se nessuno di essi supera il limite massimo da solo, è un indicatore affidabile che l'inverter sta per guastarsi.
