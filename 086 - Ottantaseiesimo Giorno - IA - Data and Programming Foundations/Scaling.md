# Data Visualization: Scaling & Axes

## 1. Il Concetto di Scaling

Lo scaling definisce la distanza tra i valori sugli assi. La scelta della scala altera drasticamente la percezione della relazione tra i dati [web:10].

### Scala Lineare (Linear Scale)

- **Funzionamento:** Gli intervalli sono costanti e additivi (es. 10, 20, 30, 40) [web:11].
- **Utilizzo:** Standard per la quasi totalità dei grafici destinati a un pubblico generale.
- **Pro:** Intuitiva, mostra chiaramente le differenze assolute.
- **Contro:** Se i dati hanno range enormi, i valori piccoli vengono "schiacciati" e diventano illeggibili [web:15].

### Scala Logaritmica (Log Scale)

- **Funzionamento:** Gli intervalli seguono una crescita esponenziale/moltiplicativa (es. 1, 10, 100, 1000) [web:9].
- **Utilizzo:** Dati con crescita esponenziale o ordini di grandezza molto vasti (es. mercati finanziari a lungo termine, dati scientifici).
- **Risk Warning (Caso Purdue Pharma):** Può essere usata per manipolare la percezione. Una crescita verticale improvvisa in scala lineare (es. concentrazione farmaco nel sangue) può apparire come una curva dolce e innocua in scala logaritmica. Non usare con pubblico non tecnico [web:14].

## 2. Best Practices sugli Assi

- **Check the Scale:** Verificare sempre se un grafico usa una scala logaritmica non dichiarata chiaramente.
- **Axis Breaks:** Controllare se l'asse parte da zero o se è "spezzato" per esagerare le differenze (spesso usato in modo ingannevole).
- **Posizionamento Temporale:** La variabile tempo deve quasi sempre essere posizionata sull'asse orizzontale (**Asse X**) per facilitare la lettura intuitiva da sinistra a destra [web:16].

## 3. Colorazione (Best Practices)

La colorazione deve rendere immediata la lettura dei valori e restare coerente con il tipo di dato (ordine, positivi/negativi, categorie).

### Gradienti per valori (sequenziale)

Usa una palette sequenziale quando i valori vanno da “basso” ad “alto” (es. volume vendite, temperatura, densità).

- Valori più bassi: colori più chiari (minor “peso visivo”).
- Valori più alti: colori più scuri (maggiore “peso visivo”).
- Mantieni un solo colore base (es. blu chiaro → blu scuro) per evitare ambiguità.

### Divergente (sotto/sopra una soglia)

Usa una palette divergente quando esiste uno “zero” o un valore di riferimento (es. profit/loss, deviazione dalla media).

- Centro neutro (es. grigio chiaro) = vicino allo zero/baseline.
- Due estremi con colori opposti ma bilanciati (es. rosso = negativo, blu/verde = positivo).
- Intensità (più scuro) = maggiore magnitudine della deviazione.

### Categorie (qualitativo)

Usa colori distinti solo quando le categorie non hanno ordine (es. regioni, prodotti, reparti).

- Evita di usare gradiente (perché suggerisce un ordine che non esiste).
- Limita il numero di colori (oltre ~7–10 la legenda diventa difficile da seguire).

### Accessibilità e leggibilità

- Evita combinazioni rosso/verde come unico canale informativo (daltonismo).
- Assicurati di avere contrasto sufficiente tra testo/elementi e sfondo.
- Non usare il colore come unico segnale: aggiungi etichette, pattern o marker quando serve.

### Coerenza e “rischio percezione”

Come la scala logaritmica può alterare la percezione del dato se non è interpretata correttamente, anche colore e intensità possono “drammatizzare” o “smorzare” differenze: mantenere scelte conservative e dichiarare la legenda chiaramente [web:14].

## 4. Titoli e Annotazioni (Labelling)

Il testo nel grafico non è decorativo: serve a guidare l'attenzione e spiegare il contesto prima che l'utente debba decifrare gli assi.

### Titoli Efficaci

Evita titoli generici come "Vendite vs Anno". Usa il titolo per dichiarare la conclusione principale del grafico.

- **Bad:** "Fatturato 2024"
- **Good:** "Il Fatturato è cresciuto del 20% nel Q4 2024"
- **Regola:** Il lettore dovrebbe capire il messaggio solo leggendo il titolo, il grafico serve a confermarlo con i dati [web:14].

### Annotazione dei Valori (Direct Labeling)

Invece di costringere l'occhio a fare "ping-pong" tra il dato e l'asse Y o la legenda:

- **Evidenziazione Selettiva:** Non etichettare _tutti_ i punti (crea rumore/clutter).
- **Min/Max:** Metti l'etichetta col valore esatto solo sul punto più alto e su quello più basso per dare subito il range.
- **Start/End:** Nei grafici a linea, etichetta il primo e l'ultimo valore per mostrare la variazione totale.
- **Outlier:** Etichetta sempre i dati anomali per spiegare il contesto (es. "Black Friday" su un picco di vendite).

### Posizionamento

- Le etichette devono essere vicine al dato, possibilmente dello stesso colore della serie dati.
- Per le linee, metti il nome della serie alla fine della linea (a destra) invece di usare una legenda separata, se lo spazio lo consente [web:16].
