import { FaBasketShopping } from "react-icons/fa6";
import {useSelector} from "react-redux"


export default function Navbar() {

    const {quantity} = useSelector((store) => store.product)

  return (
    <div>
        <nav className="border-b-white bg-black">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-5">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">Products</span>
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse relative">
                    <FaBasketShopping className="  mt-4 absolute text-white text-3xl" />
                    <p className="text-sm bg-white rounded-full p-1 ">{quantity}</p>
                </div>
            </div>
        </nav>
    </div>
  )
}
