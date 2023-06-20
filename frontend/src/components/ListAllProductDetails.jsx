import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductsContext } from '../hooks/useProductsContext';
import { Link } from 'react-router-dom'

function ListAllProductDetails({ product }) {
  const { dispatch, products } = useProductsContext();

  const id = product._id;

  const navigate = useNavigate();

  // const [quantity, setQuantity] = useState(product.quantity);
  const [error, setError] = useState(null);

  const increment = async () => {
    const newProduct = {
      title: product.title,
      category: product.category,
      quantity: products.find((product) => product._id === id).quantity + 1,
    };
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + id, {
      method: 'put',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log(error);
    }
    if (response.ok) {
      setError(null);
      // setQuantity(json.quantity);
      // update context with new quantity
      console.log('payload from listAllProductDetails', json);
      dispatch({ type: 'UPDATE_PRODUCT', payload: json });
      navigate(`/`);
    }
  };
  const decrement = async () => {
    const newProduct = {
      title: product.title,
      category: product.category,
      quantity: products.find((product) => product._id === id).quantity - 1,
    };
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + id, {
      method: 'put',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log('payload from listAllProductDetails', json);
      dispatch({ type: 'UPDATE_PRODUCT', payload: json });
      navigate(`/`);
    }
  };

  return (
    <div className="product-details">
      <Link to='/edit/' state={{ id: product._id }}>
          
      <p className="product-details-title">{product.title}</p>
        </Link>
      <p className="product-details-properties">
        {products.find((product) => product._id === id).quantity}{' '}
        <button onClick={increment}>+</button>{' '}
        <button onClick={decrement}>-</button>
      </p>
    </div>
  );
}

export default ListAllProductDetails;
