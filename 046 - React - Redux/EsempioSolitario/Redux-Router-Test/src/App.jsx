import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router-dom'

function App({ state, dispatch }) {

  const incrementClicked = () => {
    dispatch({ type: 'increment' });
  }
  const decrementClicked = () => {
    dispatch({ type: 'decrement' });
  }


  return (
    <>
      <h2>{state.count}</h2>
      <button onClick={incrementClicked}>+</button>
      <button onClick={decrementClicked}>-</button>
      <NavLink to="/moreOp">More Operations</NavLink>
    </>
  )
}

export default App
