import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myList = (
  <ul>
    <li>
      AIUT 1
    </li>
    <li>
      AIUT 2
    </li>
    <li>
      AIUT 3
    </li>
  </ul>
) 

root.render(myList); //Se richiamato modifica unicamente gli elementi che sono stati modificati al suo interno