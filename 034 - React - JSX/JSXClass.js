//Le classi in JSX si chiamano className, perchè class è una parola chiave in JS
import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myDiv = (
  <div className="big">
    I AM A BIG DIV
  </div>
)

root.render(myDiv);