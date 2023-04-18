import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <div className='container'>
        <Link to='/'>
          <h4>Garden Recovery Home</h4>
        </Link>
        <Link to='/list'>
          <h4>Add/Edit Products</h4>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
