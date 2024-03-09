import {Routes, BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import CustomProvider from './components/Contex/CarContext'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/Container/ItemList/ItemListContainer'




function App() {


  return (
    <>
      <CustomProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path='/' element={ < ItemListContainer/> } />
              {/* <Route path='/category/:category' element={<ProductListContainer/>} />
              <Route path='/product/:id' element={<ProductDetailContainer/>}/>
              <Route path='*' element={<ErrorRender error='Pagina no encontrada'/>}/>
              <Route path='/cart' element={<Cart/>} />  */}
          </Routes>
          
        </BrowserRouter>
      </CustomProvider>
    </>
  )
}

export default App
