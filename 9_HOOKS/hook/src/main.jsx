import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './routes/Home'
import Contact from './routes/Contact'

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'

import { HookUseContext } from './components/HookUseContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <Navigate to="/" />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HookUseContext>
      <RouterProvider router={router} />
    </HookUseContext>
  </React.StrictMode>,
)
