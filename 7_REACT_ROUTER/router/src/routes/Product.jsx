import { useFetch } from "../hooks/UseFetch"

import { useParams } from "react-router-dom"
 
const Product = () => {

    const {id} = useParams()

    const url = 'https://localhost:3000/products' + id

    const {data:product} = useFetch(url)

    if(!product) return <p>Carregando.....</p>

  return (
    <div>
        <p>ID do produto: {id}</p>
        <div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
        </div>
    </div>
  )
}

export default Product