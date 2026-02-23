/*
Every component’s props object has a property named children.

props.children will return everything in between a component’s opening and closing JSX tags.

So far, all of the components that you’ve seen have been self-closing tags, such as <MyFunctionComponent />. 
They don’t have to be! You could write <MyFunctionComponent></MyFunctionComponent>, and it would still work.

props.children would return everything in between <MyFunctionComponent> and </MyFunctionComponent>.

*/

import React from 'react';

function List(props) {
  let titleText = `Favorite ${props.type}`;
  if (props.children instanceof Array) {
    titleText += 's';
  }
  return (
    <div>
      <h1>{titleText}</h1>
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export default List;

//

import React from 'react';
import List from './List';

function App() {
  return (
    <div>
      <List type='Living Musician'>
        <li>Sachiko M</li>
        <li>Harvey Sid Fisher</li>
      </List>
      <List type='Living Cat Musician'>
        <li>Nora the Piano Cat</li>
        <li>Pippo Baudo</li>
      </List>
    </div>
  );
}

export default App;