import React from 'react';
import { createRoot } from 'react-dom/client';

// Copy code here:
const container = document.getElementById('app'); //Rappresenta la web page, il get element serve per prendere l'Element HTML
const root = createRoot(container) //dalla libreria react-dom/client, che crea una root React dal container e la memorizza in root. root può essere usato per renderizzare un'espressione JSX. Questa è la parte del rendering React che indica “dove posizionare il contenuto”.
root.render(<h1>Hello world</h1>); //Renderizza l'elemento JSX che viene passato come argomento

