import { useState, useEffect } from 'react'

import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

import './App.css'

// const items = [
//   { name: 'God Of War 2018', price: '340', id: 4 },
//   { name: 'Dredge', price: '440', id: 7 },
//   { name: 'Until Dawn', price: '40', id: 1 },
//   { name: 'Days Gone', price: '30', id: 3 },
// ]

function App() {
  const [products, setProducts] = useState([])

  const { data: items, httpConfig, loading, error } = useFetch(url)

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setProducts(data)
  //   }

  //   getData()

  // }, [])

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handlesubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    httpConfig(product, "POST")

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // })

    // const addedProduct = await res.json()

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    // if (res.ok) {
    //   setName('');
    //   setPrice('');
    // }
  }


  return (
    <>
      <div className="App">
        <h1>HTTP em React</h1>
        {loading && <p>Carregando...</p> }
        {error && <p> {error} </p> }
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}> {product.name} - R${product.price} </li>
            ))}
        </ul>
        {/* <ul className='list-games'>
          {items.map((game) => (
            <li key={game.id}> {game.name} Valor: R${game.price} </li>
          ))}
        </ul> */}
        <div className="add-product">
          <form onSubmit={handlesubmit}>
            <label>
              <span>Nome:</span>
              <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              <span>Preço:</span>
              <input type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)} />
            </label>
            {/* <input type="submit" value="Enviar" /> */}
            {loading && <input type='submit' disabled value='Aguarde' />}
            {!loading && <input type='submit' value='Criar' />}
          </form>
        </div>
      </div>
    </>
  )
}

export default App
