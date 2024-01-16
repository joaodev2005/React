import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

import './App.css'

const items = [
  {name: 'God Of War 2018', price: '340', id: 4},
  {name: 'Dredge', price: '440', id: 7},
  {name: 'Until Dawn', price: '40', id: 1},
  {name: 'Days Gone', price: '30', id: 3},
]


function App() {
  const [procucts, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch(url)

      const data = await res.json()

      setProducts(data)
    }

    getData( )

  }, [])

  return (
    <>
      <div className="App">
        <h1>HTTP em React</h1>
        <ul>
          {procucts.map((product) => (
            <li key={product.id}> {product.name} - R${product.price} </li>
          ))}
        </ul>
        <ul className='list-games'>
          {items.map((game) => (
            <li key={game.id}> {game.name} Valor: R${game.price} </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
