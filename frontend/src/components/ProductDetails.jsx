import React from 'react'
import { useProductsContext } from '../hooks/useProductsContext'
import { Link } from 'react-router-dom'

function ProductDetails({ product }) {
  const { dispatch } = useProductsContext()

  const handleClick = async () => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + product._id,
      { method: 'DELETE' }
    )
    const json = await response.json()
    if (response.ok) {
      dispatch({ type: 'DELETE_PRODUCT', payload: json })
    }
  }
  return (
    <div className='product-details edit-page'>
      <h4>{product.title}</h4>
      <p>Category {product.category}</p>
      <p>Quantity {product.quantity}</p>
      <p className='material-symbols-outlined delete-button' onClick={handleClick}>
        delete
      </p>
      <br />
      <p className='material-symbols-outlined edit-button'>
        <Link to='/edit/' state={{ id: product._id }}>
          edit
        </Link>
      </p>
    </div>
  )
}

export default ProductDetails
