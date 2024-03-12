import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import './App.css'
import CustomProvider from './components/Contex/CarContext'
import ItemListContainer from './components/Container/ItemList/ItemListContainer'
import NavBar2 from "./components/Navbar2/Navbar2"
import Home from './components/PaginaPrincipal/Home'
import Footer from './components/Footer/Footer'




function App() {
  return (
    <>
       <CustomProvider>
         <BrowserRouter>
              <NavBar2/> 
              <Routes>
                 <Route path='/' element={ < Home/> } /> 
                  <Route path='/category/:category' element={<ItemListContainer/>} />
                {/*  <Route path='/product/:id' element={<ProductDetailContainer/>}/>
                <Route path='*' element={<ErrorRender error='Pagina no encontrada'/>}/>
                <Route path='/cart' element={<Cart/>} />  */}
              </Routes>
              <Footer/>
         </BrowserRouter>
      </CustomProvider> 
    </>
  )
}

export default App
