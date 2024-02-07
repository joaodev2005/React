import { useFetch } from "../hooks/UseFetch"

import { useParams, Link } from "react-router-dom"

const Product = () => {

  const { id } = useParams()

  const url = 'https://localhost:3000/products/' + id

  const { data: product } = useFetch(url)

  if (!product) return <p>Carregando...</p>

  return (
    <div>
      <p>ID do produto: {id}</p>
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <Link to={`/products/${product.id}/info`}>Mais informacoes</Link>
      </div>
    </div>
  )
}

export default Product