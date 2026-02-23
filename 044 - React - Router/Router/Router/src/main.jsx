import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import RoutedPage from './RoutedPage.jsx'
import Articles from './Articles.jsx'
import Item from './Item.jsx'
import NavigateTo from './NavigateTo.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/RoutedPage', element: <RoutedPage /> },
  {
    path: '/Articles/:id',
    element: <Articles />,
    children: [
      { path: 'item', element: <Item /> } 
    ]
  },
  {
    path: '/NavigateTo', element: <NavigateTo />
  },
  { path: '*', element: <RoutedPage /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)