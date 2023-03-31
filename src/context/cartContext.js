import { createContext, useState } from 'react';

const cartContext = createContext({
    cart: [],
});

export function CartContextProvider(props){

const [cart, setCart] = useState([]);

function addProduct(product, count){
    const newCart = JSON.parse(JSON.stringify(cart));
    
     if(isInCart(product.id)){
       let index = cart.findIndex((productInCart) => productInCart.id === product.id)
       newCart[index].count += count;
    }else{ 
        newCart.push({...product, count});
     }
     setCart(newCart);
     totalProductsInCart()
}

function removeProduct(productId){

     const removeProduct = cart.filter((product) => product.id !== productId);
     setCart(removeProduct);
    
}

function clear(){
    setCart([])
}

function totalProductsInCart(){
    let total = 0;
    cart.forEach((item) => total += item.count);
    
    return total;
} 

function getPriceInCart(){
    let total = 0;
    cart.forEach((item) => total += item.count * item.price);

    return total;
}

function isInCart(id){
    return cart.some((product) => product.id === id);
}

    return(
        <cartContext.Provider value={{cart, addProduct, totalProductsInCart, isInCart, removeProduct, getPriceInCart, clear}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext;