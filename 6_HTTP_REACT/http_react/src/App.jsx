import { useState, useEffect } from 'react'

const url = "https://localhost:3000/products"

import './App.css'

function App() {
  const [procucts, setProducts] = useState({})

  useEffect(() => {
    async function getData() {
      const res = await fetch(url)

      const data = await res.json()

      console.log(data)
    }

    getData( )

  }, [])

  return (
    <>
      <h1>HTTP em React</h1>
    </>
  )
}

export default App
