/*
The reason for this is that <Button /> is not an HTML-like JSX element; it’s a component instance.
Names like onClick only create event listeners if they’re used on HTML-like JSX elements. Otherwise, they’re just ordinary prop names.
*/
import React from 'react';
import Button from './Button';

function Talker() {
  function handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button onClick={handleClick}/>;
}

export default Talker;

// 

import React from 'react';

function Button(props) {
    return (
      <button onClick={props.onClick}>
        Click me!
      </button>
    );
}

export default Button;