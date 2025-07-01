import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, NavLink } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const [id, setId] = useState('');
  const [q, setQ] = useState('');

  const handleChangeID = ({ target }) => {
    setId(target.value);
  }
  
  const handleChangeQ = ({ target }) => {
    setQ(target.value);
  }

  return (
    <>
      <Link to={'/RoutedPage'}>Redirect</Link>
      <br />
      <NavLink to={'/'} className={ ({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'}>Vai ma con state</NavLink>
      <hr />
      <input type="text" value={id} onChange={handleChangeID} />
      <br />
      <input type="text" value={q} onChange={handleChangeQ} />
      <br />
      <Link to={`/Articles/${id ? id : 'aiut'}?q=${q ? q : 'non hai scritto nulla'}`}>Articles con ID</Link>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
