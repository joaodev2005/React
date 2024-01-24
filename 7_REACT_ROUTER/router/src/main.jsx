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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
      {
        path: 'About',
        element: <About />
      },
      {
        path: '/products/:id',
        element: <Product />,
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
