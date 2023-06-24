import CartContext from "./cart-context";
import { useState } from "react";

const productsArr = [
    ]

    const CartProvider = (props) =>{
        const [arr,setArr] = useState(productsArr)
        
   
     
        const addHandler = (item) =>{
            setArr((pre)=>[item,...pre])
        }
        const removeHandler = (id) =>{
            setArr((pre)=>pre.filter((itm)=>itm.id!==id))
        }
     
    
        const cartContext = {
            items:arr,
            totalAmount:0,
            addItem:addHandler,
            removeItem:removeHandler,
            
            
        }
        return (
            <CartContext.Provider value={cartContext}>
                {props.children}
            </CartContext.Provider>
        )
    }
    
    export default CartProvider;