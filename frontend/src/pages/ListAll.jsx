import { useEffect } from 'react'
import { useProductsContext } from '../hooks/useProductsContext'
import ListAllProductDetails from '../components/ListAllProductDetails'



function ListAll() {
  const { products, dispatch } = useProductsContext()
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL
      )

      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_PRODUCTS', payload: json })
      }
    }

    fetchProducts()
  }, [dispatch])

  return (
    <div className='list-all'>
      <div className='products'>
        {products &&
          products.map((product) => (
            <ListAllProductDetails key={product._id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default ListAll
