import { useEffect, useState } from 'react'
import { useProductsContext } from '../hooks/useProductsContext'
import ListAllProductDetails from '../components/ListAllProductDetails'

function ListAll() {
  const { products, dispatch } = useProductsContext()

  const [loading, setLoading] = useState(true)

  const [filteredProducts, setFilteredProducts] = useState(products)
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

  const filterSoil = () => {
    let newProducts = products.filter(
      (product) => product.category.toLowerCase() == 'soil'
    )
    setFilteredProducts(newProducts)
  }
  const filterMulch = () => {
    let newProducts = products.filter(
      (product) => product.category.toLowerCase() == 'mulch'
    )
    setFilteredProducts(newProducts)
  }
  const filterStone = () => {
    let newProducts = products.filter(
      (product) => product.category.toLowerCase() == 'stone'
    )
    setFilteredProducts(newProducts)
  }
  const filterPavers = () => {
    let newProducts = products.filter(
      (product) => product.category.toLowerCase() == 'paver'
    )
    setFilteredProducts(newProducts)
  }
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
          <div className='sortingNav'>
            <div onClick={filterSoil} className='categoryChoice'>
              Soil
            </div>
            <div onClick={filterMulch} className='categoryChoice'>
              Mulch
            </div>
            <div onClick={filterStone} className='categoryChoice'>
              Stone
            </div>
            <div onClick={filterPavers} className='categoryChoice'>
              Pavers
            </div>
          </div>
          {filteredProducts &&
            filteredProducts.map((product) => (
              <ListAllProductDetails key={product._id} product={product} />
            ))}
        </div>
      )}
    </div>
  )
}

export default ListAll
