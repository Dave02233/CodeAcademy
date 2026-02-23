## **Immer**
è una libreria JavaScript che permette di scrivere codice che sembra “mutare” (modificare) direttamente lo stato, ma in realtà crea una copia immutabile aggiornata.
In Redux, non si deve mai modificare lo stato originale, ma spesso scrivere codice immutabile può essere complicato, soprattutto con oggetti o array annidati.

Perché è utile?

Permette di scrivere codice più semplice e leggibile.
Riduce il rischio di errori dovuti a modifiche accidentali dello stato.
Con Immer, puoi usare metodi come .push() o assegnare proprietà direttamente, e Immer si occupa di creare una nuova copia aggiornata.

*Esempio*:
```js
// Con Immer (usato da Redux Toolkit)
state.push(action.payload); // Sembra mutare, ma è sicuro!
```

Immer rende il lavoro con Redux più facile e sicuro.


By default, each action creator accepts one 
argument
Preview: Docs An argument is the actual value of a variable passed into a function.
, which becomes the action.payload. The action.type string is formed by combining the slice’s name with the case reducer function’s name.

For instance:

console.log(todosSlice.actions.addTodo('walk dog'))
// {type: 'todos/addTodo', payload: 'walk dog'}

Copy to Clipboard

With these auto-generated action creators, we can export them and use them in other files. Theoretically, you could export the entire slice object returned by createSlice(). But, following the Redux community’s “ducks” pattern pattern, we suggest exporting named action creators separately from the reducer:

export const { addTodo, toggleTodo } = todosSlice.actions

Copy to Clipboard

Once we export the action creators, we can use them to dispatch actions in a structured way throughout our application.

In addition to simplifying the logic for actions and reducers, Redux Toolkit has a configureStore() 
method

```js
import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
 reducer: {
   // Define a top-level state field named `todos`, handled by `todosReducer`
   todos: todosReducer,
   filters: filtersReducer
 }
})

export default store
```

