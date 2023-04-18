import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ListAllProductDetails({ product }) {
  const navigate = useNavigate()
  const id = product._id
  const [quantity, setQuantity] = useState(product.quantity)
  const [error, setError] = useState(null)

  const increment = async () => {
    const newProduct = {
      title: product.title,
      category: product.category,
      quantity: quantity + 1,
    }
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        id,
      {
        method: 'put',
        body: JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      console.log(error);
    }
    if (response.ok) {
      setError(null)
      setQuantity(json.quantity)
      navigate(`/`)
    }
  }
  const decrement = async () => {
    const newProduct = {
      title: product.title,
      category: product.category,
      quantity: quantity - 1,
    }
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        id,
      {
        method: 'put',
        body: JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setQuantity(json.quantity)
      navigate(`/`)
    }
  }

  return (
    <div className='product-details'>
      <h4>
        {product.title}
      </h4>
      <p>
        {quantity} <button onClick={increment}>+</button>{' '}
        <button onClick={decrement}>-</button>
      </p>
    </div>
  )
}

export default ListAllProductDetails
