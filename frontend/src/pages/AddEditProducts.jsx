import { useEffect } from 'react'
import { useProductsContext } from '../hooks/useProductsContext'

import ProductDetails from '../components/ProductDetails'
import ProductForm from '../components/ProductForm'

function AddEditProducts() {
  const { products, dispatch } = useProductsContext()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL)

      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_PRODUCTS', payload: json })
      }
    }

    fetchProducts()
  }, [dispatch])

  return (
    <div className='home'>
      <div className='products'>
        {products &&
          products.map((product) => (
            <ProductDetails key={product._id} product={product} />
          ))}
      </div>
      <ProductForm />
    </div>
  )
}

export default AddEditProducts
