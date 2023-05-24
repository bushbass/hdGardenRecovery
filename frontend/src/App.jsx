import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddEditProducts from './pages/AddEditProducts'
import Edit from './pages/Edit'
import ListAll from './pages/ListAll'
import Navbar from './components/Navbar'
import AddProducts from './pages/AddProducts'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<ListAll />}></Route>
            <Route path='/list' element={<AddEditProducts />}></Route>
            <Route path='/edit' element={<Edit />}></Route>
            <Route path='/add' element={<AddProducts />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
