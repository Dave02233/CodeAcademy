/*Not all lists need to have keys. A list needs keys if either of the following is true:

The list items have memory from one render to the next. 
For instance, when a to-do list renders, each item must “remember” whether it was checked off. 
The items shouldn’t get amnesia when they render.
A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>
  // expression goes here:
  <li key={"person_" + i}>{person}</li>
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>);