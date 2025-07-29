import { useState } from 'react'
import { NavLink } from 'react-router-dom';

function App2({ state, dispatch }) {

  const multiplyClicked = () => {
    dispatch({ type: 'multiply' });
  }
  const divideClicked = () => {
    dispatch({ type: 'divide' });
  }


  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={multiplyClicked}>*</button>
      <button onClick={divideClicked}>/</button>
      <NavLink to="/">Indietro</NavLink>
    </>
  )
}

export default App2
