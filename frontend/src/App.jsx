import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddEditProducts from './pages/AddEditProducts'
import Edit from './pages/Edit'
import ListAll from './pages/ListAll'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<ListAll />}></Route>
            <Route path='/edit' element={<Edit />}></Route>
            <Route path='/list' element={<AddEditProducts />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
