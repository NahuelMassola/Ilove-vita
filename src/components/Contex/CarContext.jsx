import { useState , useContext , createContext} from "react";

export const CartContext = createContext([]);
export const useCartContex = () => useContext(CartContext);

// eslint-disable-next-line react/prop-types
const CustomProvider = ({ children }) => {
    
    const [ cartItems , setCartItems ] = useState([]);
    

    const clear = () => {   
        setCartItems([]);
    }


    const cartTotal = () => {
        return cartItems.reduce((total, item) => total+=item.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cartItems , cartTotal , clear}}>
            {children}
        </CartContext.Provider>
    )
}



export default CustomProvider ;