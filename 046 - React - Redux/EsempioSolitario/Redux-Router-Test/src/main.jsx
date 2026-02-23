import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store, dispatch } from './store.js'
import App from './App.jsx'
import App2 from './App2.jsx'

const root = createRoot(document.getElementById('root'));

const render = () => {
  const router = createBrowserRouter([
    { path: '/', element: <App state={store.getState()} dispatch={store.dispatch} /> },
    { path: '/moreOp', element: <App2 state={store.getState()} dispatch={store.dispatch} /> }
  ]);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

store.subscribe(render);
render();