import { useContext } from "react"
import { CartContext } from "../Contex/CarContext"
import shopingCart from './shopping-cart.png'
import './CartLogo.css'

const CartLogo = () => {
    const { cartTotal, cartItems } = useContext(CartContext)
    
    return (
        <div> 
            {
            cartItems.length === 1 ? (
            <></>
            ) : (
                <>
                <div type="button" className="cart-logo" title="Ir al Carrito">
                    <span className="">{cartTotal()}</span>
                    <img src={shopingCart} alt="cart-img" className="cart-img" title="Ir al Carrito" />
                </div> 
                </>
            )}
        </div> 
    )
}

export default CartLogo
