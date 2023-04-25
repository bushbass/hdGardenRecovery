import { useEffect, useState } from 'react'
import { useProductsContext } from '../hooks/useProductsContext'
import ListAllProductDetails from '../components/ListAllProductDetails'

function ListAll() {
  const { products, dispatch } = useProductsContext()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL)

      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_PRODUCTS', payload: json })
      }
      setLoading(false)
    }

    fetchProducts()
  }, [dispatch])

  return (
    <div className='list-all'>
      {loading ? (
        <>
          <h3>
            The database for this app runs on a free server that goes to sleep
            after periods of inactivity
            <br />
            If you're seeing this message, please wait a minute to let the
            server start up and then hit reload
          </h3>
        </> 
      ) : (
        <div className='products'>
          {products &&
            products.map((product) => (
              <ListAllProductDetails key={product._id} product={product} />
            ))}
        </div>
      )}
     
    </div>
  )
}

export default ListAll
