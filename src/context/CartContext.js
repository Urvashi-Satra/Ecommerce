import axios from "axios";
import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartFunctionality = (props)=>
{
    const [cartItems,setCartItems]= useState([]);

    const addtoCart=(product)=>{
        console.log("Add to cart");
        setCartItems([...cartItems,product]);
        const data={"userId":sessionStorage.getItem("userId"),"productId":product.id,"quantity":1}
        axios.post( "http://localhost:5000/cart",data)
    }

    const removeFromCart=(product)=>{

    }


    return(
        <div>
           <CartContext.Provider value={{cartItems,addtoCart,removeFromCart}}>
                {props.children}
            </CartContext.Provider>
        </div>
    )

}