import React from 'react';

function App(props) {
  return(
    <>
      <h1>Hello World!</h1>
      {props.text 
      ? <button>{props.text}</button>
      : <h2>Nesun testo prop</h2>}
    </>
  )
}

export default App;