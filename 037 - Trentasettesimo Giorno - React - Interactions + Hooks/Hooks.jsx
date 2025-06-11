/*
Gli Hook di React, in parole povere, sono funzioni che ci permettono di:
- Gestire lo stato interno dei componenti.
- Gestire gli effetti collaterali post-render direttamente dai nostri componenti funzione.

Utilizzando gli Hook, possiamo determinare cosa mostrare agli utenti dichiarando come dovrebbe apparire la nostra interfaccia utente in base allo stato.

React offre una serie di Hook incorporati. Alcuni di questi includono:

1. **useState()**  
    Permette di gestire lo stato locale di un componente.

2. **useEffect()**  
    Accetta una funzione e un array. La funzione verrà eseguita al termine della fase di render corrente e solo se gli elementi all'interno dell'array sono cambiati rispetto al render precedente.

3. **useContext()**  
    Iscrive un componente a un contesto che include il suo prop `value`, presente più in alto nella gerarchia dei componenti.

4. **useReducer()**  
    Utile per gestire stati complessi con logiche di aggiornamento avanzate.

5. **useRef()**  
    Permette di accedere direttamente a un elemento DOM o di mantenere un valore persistente tra i render senza causare un re-render.

Consulta l'elenco completo nella documentazione di React.
*/
