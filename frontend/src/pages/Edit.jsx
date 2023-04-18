import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../hooks/useProductsContext'

function Edit() {
  const {  dispatch } = useProductsContext()

  const location = useLocation()
  const { id } = location.state
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL +
          id
      )

      const json = await response.json()
      if (response.ok) {
        setTitle(json.title)
        setCategory(json.category)
        setQuantity(json.quantity)
      }
    }
    fetchProducts()
  }, [id])

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = { title, category, quantity }

    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL +
        id,
      {
        method: 'put',
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
      setCategory('')
      setQuantity(null)
      setEmptyFields([])
      dispatch({type:"UPDATE_PRODUCT", payload:json})
      navigate(`/`)
    }
  }

  return (
    <div className='container'>
      <form className='create' onSubmit={handleSubmit}>
        <h4>Edit</h4>
        <label>Product Title:</label>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes('title') ? 'error' : ''}
        />
        <label>Category:</label>
        <input
          type='text'
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className={emptyFields.includes('category') ? 'error' : ''}
        />
        <label>Quantity:</label>
        <input
          type='number'
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          className={emptyFields.includes('quantity') ? 'error' : ''}
        />
        <button>Edit Product</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  )
}

export default Edit
