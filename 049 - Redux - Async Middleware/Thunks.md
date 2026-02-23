
# 📦 Redux Middleware, Thunk e Parametri Extra

## 🔹 Cos'è un Middleware in Redux?

Un **middleware** in Redux è una funzione che si "inserisce" tra il **dispatch di un'azione** e il momento in cui questa arriva al **reducer**. Serve per:

- gestire **azioni asincrone**
- fare **logging**
- gestire **side effects**
- **modificare** o **bloccare** azioni in transito

### ➕ Esempio semplice di middleware:

```js
const loggerMiddleware = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};
```

Questo middleware logga ogni azione e lo stato dopo l'azione.

---

## 🔹 Cos'è `redux-thunk`?

`redux-thunk` è un middleware che permette di **scrivere azioni asincrone** (es. chiamate API). Di default Redux accetta solo azioni con oggetti `{ type: 'XXX' }`. Con `thunk`, puoi **dispatchare funzioni** invece di oggetti.

### ✅ Esempio:

```js
// Azione normale
const increment = () => ({
  type: 'INCREMENT'
});

// Azione thunk
const fetchData = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCH_START' });

    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', error });
    }
  };
};
```

---

## 🔹 Come si passano **più argomenti** a un Thunk?

Quando configuri `redux-thunk`, puoi passare un **argomento extra** (tipo una variabile globale o una funzione helper) che verrà disponibile nel thunk come **terzo parametro**.

### 🔧 Setup di `redux-thunk` con argomenti extra:

```js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const customApi = {
  getData: () => fetch('/api/data')
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: customApi
      }
    })
});
```

### 👇 Uso del terzo argomento nel thunk:

```js
const fetchData = () => {
  return async (dispatch, getState, api) => {
    dispatch({ type: 'FETCH_START' });

    try {
      const response = await api.getData();
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', error });
    }
  };
};
```

---

## 🧪 Recap Finale

| Concetto         | Spiegazione                                                      |
|------------------|------------------------------------------------------------------|
| Middleware        | Funzione che intercetta le azioni tra dispatch e reducer        |
| Thunk             | Funzione che può eseguire codice asincrono prima di dispatchare |
| Argomento extra   | Parametro globale passato ai thunk (es. API, config, ecc.)      |

---

## 📁 Struttura consigliata

```
/store
  └─ store.js           // configurazione Redux + thunk + extraArgument
/actions
  └─ myActions.js       // thunk con dispatch, getState, api
/reducers
  └─ myReducer.js
```

---

## 🧠 Pro Tip

Puoi anche usare i thunk per:

- fare redirect dopo un'azione (`navigate('/home')`)
- leggere lo stato con `getState()`
- accedere a token di autenticazione salvati nello store

---
