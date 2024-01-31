import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {calculatePrice} from "./control/ProductSlice"


function App() {

  const {products} = useSelector((store) => store.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculatePrice())  
  }, [dispatch, products])
  

  return (
    <div>
      <Navbar/>
      <div>
        <p className='font-semibold text-6xl text-center m-3 mt-4' >Sepetim</p> <br />
      </div>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default App
