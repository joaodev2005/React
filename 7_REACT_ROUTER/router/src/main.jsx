import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Contact from './routes/Contact.jsx'

import Home from './routes/Home.jsx'

import About from './routes/About.jsx'

import Product from './routes/Product.jsx'

import ErrorPage from './routes/ErrorPage.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import Info from './routes/Info.jsx'

import Search from './routes/Search.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'products/:id',
        element: <Product />,
      },
      {
        path: 'products/:id/info',
        element: <Info />,
      },
      {
        path: 'search',
        element: <Search />,
      }
    ]
  },
  // {
  //   path: "Contact",
  //   element: <Contact />
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
