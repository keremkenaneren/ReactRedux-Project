import {useSelector, useDispatch} from "react-redux"
import ProductItem from "./ProductItem"
import {clearCard} from "../control/ProductSlice"

export default function ProductList() {

    const dispatch = useDispatch()

    const {quantity,products,price} = useSelector((store) => store.product)

  return (
    <div>
        {
            quantity < 1 ? (
                <p className='animate-pulse text-4xl text-center m-3 mt-4' >Bomboş.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {products.map((item,key) => {
                        return <ProductItem {...item} key={key} />
                    })}
                </div>
            )
        }
        <br /><br />
        <footer>
            <div className="text-center flex justify-center" >
                <h1 className="text-2xl font-bold" >Toplam tutar : {price} TL </h1>
                <button onClick={()=> dispatch(clearCard())} className="ml-5 text-white bg-red-600 hover:bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Temizle</button>
            </div>
        </footer>
    </div>
  )
}
