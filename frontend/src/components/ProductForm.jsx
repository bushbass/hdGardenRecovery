import { useState } from 'react'
import { useProductsContext } from '../hooks/useProductsContext'

const ProductForm = () => {
  const { dispatch } = useProductsContext()

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState( '')
  const [quantity, setQuantity] = useState(0)
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = { title,category, quantity }

    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL,
      {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setEmptyFields([])
      dispatch({ type: 'CREATE_PRODUCT', payload: json })
    }
  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Product</h3>

      <label>Product Title:</label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title')? 'error': ''}
      />
      <label>Category:</label>
      <input
        type='text'
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className={emptyFields.includes('category')? 'error': ''}
      />
      <label>Quantity:</label>
      <input
        type='text'
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
        className={emptyFields.includes('quantity')? 'error': ''}
      />

      <button>Add Product</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default ProductForm
