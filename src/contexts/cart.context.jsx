import { createContext, useEffect, useState } from "react";

const addCartItem=(cartItems,productToAdd) => {

    const existingCartItem = cartItems.find((cartItem)=> cartItem.id === productToAdd.id)

    if(existingCartItem){
        return cartItems.map(
        (cartItem)=> cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1}
        :cartItem )
    }

    return [...cartItems,{...productToAdd,quantity: 1}]

}
const removeCartItem=(cartItems,productToRemove)=>{
    const existingCartItem = cartItems.find((cartItem)=> cartItem.id === productToRemove.id)

    if(existingCartItem.quantity === 1){
        return cartItems.filter(
        (cartItem)=> cartItem.id !== productToRemove.id)
    }
    return cartItems.map(
        (cartItem)=> cartItem.id === productToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        :cartItem )
}

const clearCartItem=(cartItems,itemToClear)=>cartItems.filter((cartItem)=> cartItem.id !== itemToClear.id)

export const CartContext= createContext({
    isCartOpen:false,
    setIsCartOpen: ()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemToCart:()=>{},
    clearItem:()=>{},
    cartCount:0,
    cartTotal:0
})

export const CartProvider= ({children})=>{

    const [isCartOpen,setIsCartOpen]= useState(false);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]= useState(0)
    const [cartTotal,setCartTotal]= useState(0)

    useEffect(()=>{
        const newCartCount= cartItems.reduce((total,cartItem)=>total+cartItem.quantity,0)
        setCartCount(newCartCount)
    },[cartItems])
    
    useEffect(()=>{
        const newCartTotal= cartItems.reduce((total,cartItem)=>total+ cartItem.quantity* cartItem.price,0)
        setCartTotal(newCartTotal)
    },[cartItems])

    const addItemToCart=(productToAdd)=>{
        setCartItems((cartItems)=> addCartItem(cartItems,productToAdd))
    }
    
    const removeItemToCart=(productToRemove)=>{
        setCartItems((cartItems)=> removeCartItem(cartItems,productToRemove))
    }
    const clearItem=(itemToClear)=>{
        setCartItems((cartItems)=> clearCartItem(cartItems,itemToClear))
    }
    const value= {isCartOpen,setIsCartOpen, addItemToCart,cartItems,cartCount,removeItemToCart,clearItem,cartTotal}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
