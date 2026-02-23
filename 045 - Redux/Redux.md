Redux viene comunemente utilizzato con React per gestire lo stato dell'applicazione, ma può essere usato anche con altre librerie e framework, come Angular. Redux è particolarmente utile quando l'applicazione diventa molto grande e complessa. 🚀

---

### 🔄 Flusso di Dati Unidirezionale

Redux aiuta a separare **stato**, **vista** e **azioni** richiedendo che lo stato sia gestito da un'unica fonte centrale. Le richieste di modifica dello stato vengono inviate a questa fonte centrale dai componenti della vista sotto forma di azioni. Qualsiasi componente della vista che deve essere aggiornato viene informato da questa fonte centrale. Questa struttura rende il codice più leggibile, affidabile e manutenibile.

**Flusso:**  
`Stato → Vista → Azioni`

Nelle applicazioni React tradizionali, questi tre aspetti spesso si sovrappongono: i componenti gestiscono sia la UI che il proprio stato. Quando avvengono azioni che modificano lo stato, i componenti devono comunicare direttamente tra loro.

Lo stato in un'applicazione web rappresenta le informazioni correnti che determinano il comportamento e l'aspetto dell'applicazione. È una fonte centralizzata di dati che memorizza i dettagli essenziali dell'applicazione in ogni momento.

**Esempi di stato:**
- 📅 In un'app calendario: eventi (nome, data, etichetta), fuso orario corrente, filtri di visualizzazione.
- ✅ In una to-do app: elementi da fare (descrizione, completato/non completato), ordine degli elementi, filtri di visualizzazione.
- 📝 In un editor di testo: contenuto del documento, impostazioni di stampa, commenti.

Le app complesse hanno molti stati da gestire e passarli lungo la gerarchia dei componenti può diventare inefficiente. Redux offre una soluzione coerente e prevedibile per la gestione dello stato.

Con Redux, lo stato può essere di qualsiasi tipo JavaScript: numero, stringa, booleano, array o oggetto.

**Esempio di stato per una to-do app:**

```js
const state = [ 'Stampare la mappa', 'Preparare gli snack', 'Raggiungere la vetta' ];
```

---

### ⚡ Azioni

Le applicazioni ben progettate hanno componenti separati che devono comunicare e condividere dati.

Ad esempio, una to-do list può avere un campo di input dove l'utente inserisce una nuova attività. L'applicazione trasferisce questo dato dall'input, lo aggiunge a un array di tutte le attività e lo mostra a schermo. Questa interazione viene definita come **azione**.

Le azioni descrivono un evento che è avvenuto e forniscono informazioni su cosa deve essere aggiornato nello stato dell'applicazione. In breve, le azioni sono il modo in cui Redux gestisce e aggiorna lo stato.

In Redux, le azioni sono oggetti JavaScript semplici. Ecco un esempio:

```js
const action = {
    type: 'todos/addTodo',
    payload: 'Fare selfie'
};
```

Ogni azione deve avere una proprietà `type` di tipo stringa che descrive l'azione. Di solito, un'azione ha anche una proprietà `payload` che contiene le informazioni relative all'azione. In questo caso, il payload è il testo della to-do.

Quando un'azione viene generata e notifica le altre parti dell'applicazione, si dice che l'azione viene "**dispatchata**".

**Altri esempi di azioni:**

- 🗑️ "Rimuovi tutte le attività" (non richiede payload):

    ```js
    const action = {
        type: 'todos/removeAll'
    }
    ```

- ❌ "Rimuovi l'attività 'Preparare gli snack'":

    ```js
    const action = {
        type: 'todos/removeTodo',
        payload: 'Preparare gli snack'
    }
    ```

---

## 🧩 Reducer

Un **reducer** è una semplice funzione JavaScript che definisce come lo stato corrente e un'azione vengono combinati per creare il nuovo stato.

**Esempio di reducer per una to-do app:**

```js
const initialState = [ 'Stampare la mappa', 'Preparare gli snack', 'Raggiungere la vetta' ];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/addTodo': {
      return [ ...state, action.payload ];
    }
    case 'todos/removeAll': {
      return [];
    }
    default: {
      return state;
    }
  }
}
```

**Caratteristiche dei reducer:**
- Sono funzioni JavaScript pure.
- Definiscono il prossimo stato dell'applicazione dato lo stato attuale e una specifica azione.
- Restituiscono uno stato iniziale di default se non viene fornito uno stato.
- Restituiscono lo stato attuale se l'azione non è riconosciuta.

**Nota sulle sintassi JavaScript:**
- L'operatore `=` serve per fornire un valore di default al parametro `state`.
- L'operatore spread `...` copia lo stato corrente e aggiunge/modifica i valori senza alterare l'originale.

**Regole fondamentali dei reducer:**
1. Calcolano il nuovo stato solo in base a `state` e `action`.
2. Non modificano mai lo stato esistente, ma ne creano una copia aggiornata (immutabilità).
3. Non devono eseguire logica asincrona o avere effetti collaterali ("side effects").

**Esempio di aggiornamento immutabile:**

```js
const immutableUpdater = (obj) => {
  return {
    ...obj,
    completed: !obj.completed
  }
}

const task = { text: 'stirare i vestiti', completed: false };
const updatedTask = immutableUpdater(task);
console.log(updatedTask); 
// { text: 'stirare i vestiti', completed: true }

console.log(task); 
// { text: 'stirare i vestiti', completed: false }
```

**Esempio di funzione NON pura (con side effect):**

```js
const addItemToList = (list) => {
  let item;
  fetch('https://anything.com/endpoint')
    .then(response => {
      if (!response.ok) {
        item = {};
      }
      item = response.json();
   });

   return [...list, item];  
};
```

**Versione pura (senza side effect):**

```js
let item;
// fetch dell'item fuori dalla funzione

const addItemToList = (list, item) => {
    return [...list, item];
};
```

---

## 🏪 Store

Redux utilizza un oggetto speciale chiamato **store**. Lo store funge da contenitore per lo stato ed è il fulcro dell'applicazione, la "single source of truth". Lo store si occupa di gestire il dispatch delle azioni e di attivare il reducer quando vengono dispatchate azioni. Nella maggior parte delle applicazioni Redux, esiste tipicamente un solo store.

**Flusso dei dati con lo store:**
1. Lo store inizializza lo stato con un valore di default.
2. La vista mostra quello stato all'utente.
3. Quando l'utente interagisce con la vista (es. clicca un bottone), viene dispatchata un'azione allo store.
4. Il reducer dello store combina l'azione e lo stato corrente per determinare il nuovo stato.
5. La vista viene aggiornata per mostrare il nuovo stato.

---

## 📝 Riepilogo Finale

- **Redux** è una libreria per gestire e aggiornare lo stato dell'applicazione secondo l'architettura Flux.
- Rende il codice più prevedibile, testabile e manutenibile consolidando lo stato in un unico oggetto.
- I componenti ricevono solo i dati da visualizzare e possono richiedere cambiamenti tramite eventi chiamati **azioni**.
- In Redux, i dati fluiscono in una sola direzione: **stato → vista → azione → stato**.
- **Stato**: le informazioni correnti dell'applicazione.
- **Azione**: oggetto che descrive un evento nell'applicazione (deve avere almeno la proprietà `type`, spesso anche `payload`).
- **Reducer**: funzione che determina il prossimo stato dato lo stato attuale e una specifica azione. Deve essere pura e aggiornare lo stato in modo immutabile.
- **Store**: contenitore dello stato, gestisce il dispatch delle azioni e richiama il reducer. Di solito c'è un solo store per applicazione.

✨ **Redux promuove una separazione chiara delle responsabilità, migliora la manutenibilità e facilita il debug e i test.** ✨
