# Bias in Data Analysis — Appunti condensati

## Idea chiave

- Il bias è un errore sistematico (non casuale) che distorce decisioni e interpretazioni.
- Anche dati e algoritmi possono essere “di parte” perché sono creati, raccolti e usati da persone dentro contesti storici/culturali.
- Esempio intuitivo: automation bias → fidarsi del GPS anche quando “a occhio” è palesemente sbagliato (es. finire in un lago).

## Automation bias (bias dell’automazione)

- Tendenza a considerare macchine/computer più affidabili perché percepiti come oggettivi.
- Rischio: ignorare segnali contrari (esperienza, contesto, buon senso).
- Contromisura pratica: trattare output automatici come “un input”, non come verità; cercare segnali indipendenti (cross-check).

---

## 1) Bias nella raccolta dati (data collection)

### Selection bias / sample bias

- Accade quando il campione non rappresenta la popolazione reale.
- Cause tipiche:
  - Campione piccolo o non randomizzato.
  - Dati disponibili “per comodità” (convenience sampling).
  - Dati influenzati da bias storici (historical bias): il passato riflette disuguaglianze/abitudini che si trascinano nei dataset.

### Caso: tool di recruiting (Amazon, 2018)

- Modello allenato su CV storici di assunzioni/non assunzioni.
- Problema: storicamente più candidati/assunti maschi → i pattern “di successo” nel dataset erano sbilanciati.
- Effetto: il modello penalizzava CV con termini associati a donne (es. “women’s” in college/club/comitati).
- Nota importante: anche senza usare esplicitamente il genere, il modello può usare proxy (parole/feature correlate).

### Mitigazioni utili

- Progettare campionamenti rappresentativi, non solo disponibili.
- Integrare più fonti di dati per diversificare.
- Misurare e dichiarare i limiti del dataset (chi è sotto-rappresentato?).
- Prevedere processi di revisione per correggere bias storici, non solo “pulire” il rumore.

---

## 2) Bias nella costruzione/ottimizzazione degli algoritmi

### Algorithmic bias

- L’algoritmo produce errori sistematici e ripetibili che creano esiti ingiusti (favorisce un gruppo rispetto a un altro).
- Spesso nasce da selection bias e viene rinforzato da scelte di feature, obiettivi (loss), soglie decisionali e dati di valutazione.

### Caso: riconoscimento facciale e Gender Shades

- Software commerciali testati con classificazione di genere binaria.
- Risultato tipico: ottimo su uomini con pelle chiara, peggiora su altri gruppi, molto scarso su donne con pelle scura.
- Radice comune: dataset di benchmark non rappresentativi (evaluation bias).
  - Se il benchmark contiene pochi esempi di certi gruppi, l’accuratezza “media” sembra alta ma nasconde fallimenti locali.

### Problema “black box”

- Algoritmi proprietari: non si conoscono dati di training/test, metriche dettagliate, o scelte progettuali.
- Difficile (o impossibile) auditare e attribuire responsabilità.

### Mitigazioni utili

- Trasparenza su:
  - Origine dati, distribuzioni demografiche, procedure di etichettatura.
  - Metriche disaggregate per gruppi (non solo accuracy globale).
- Usare benchmark più rappresentativi (es. nuovi dataset creati per coprire meglio la varietà umana).
- Validazione continua in contesti reali (dataset shift) + audit indipendenti.
- Definire policy di utilizzo: se un sistema fallisce su alcuni gruppi, limitarne o vietarne l’uso in contesti ad alto rischio.

---

## 3) Bias nell’interpretazione e nelle conclusioni

### Confirmation bias

- Cercare/interpretare prove che confermano l’ipotesi iniziale.
- Mitigazione:
  - Definire ipotesi, metriche e criteri di successo prima dell’analisi.
  - Documentare cosa ci si aspettava e cosa invece è emerso.
  - Cercare attivamente spiegazioni alternative.

### Overgeneralization bias

- Estendere conclusioni oltre il dominio del dataset (o oltre la popolazione realmente osservata).
- Mitigazione:
  - Chiarire sempre: “vale per chi, quando, dove, con quali condizioni?”
  - Evitare extrapolazioni senza evidenze (o segnalarle come speculative).

### Reporting bias (publication/positivity bias)

- Tendenza a pubblicare/condividere solo risultati “positivi” o coerenti con la narrativa.
- Mitigazione:
  - Riportare anche risultati nulli/negativi.
  - Conservare tracciabilità delle analisi (versioning, notebook, log delle scelte).
  - Favorire review interna/peer review e preregistrazione quando possibile.

---

## Checklist operativa (rapida)

- Dati:
  - Il campione rappresenta la popolazione target?
  - Ci sono gruppi sotto-rappresentati o proxy sensibili?
  - Esistono bias storici incorporati nei dati?
- Modello:
  - Metriche per sottogruppi (fairness + performance)?
  - Benchmark adeguato o evaluation bias?
  - Trasparenza e auditabilità (documentazione, dataset cards, model cards)?
- Interpretazione:
  - Ipotesi dichiarate prima?
  - Conclusioni limitate al perimetro valido?
  - Risultati negativi riportati?

---

## Perché conta (impatto reale)

- Dati e algoritmi influenzano decisioni ad alto impatto: assunzioni, accesso a servizi, credito/affitti, scuola, polizia, libertà vigilata.
- Obiettivo pratico: non “eliminare” ogni bias (impossibile), ma identificarlo, misurarlo, ridurlo e comunicarne i limiti in modo responsabile.
