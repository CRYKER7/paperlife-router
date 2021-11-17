import React,{ useReducer } from 'react'
import { TYPES } from '../Actions/shoppingActions';
import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer'
import CartItem from '../Components/CartItems';
import ProductItem from '../Components/ProductItems';
import NavBar from '../Components/Navbar';

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const {products, cart} = state;
    
    const addToCart = (id) => {
        //console.log(id)
        dispatch({type:TYPES.ADD_TO_CART,payload: id});
    };

    const delFromCart = (id, all=false) => {
        if(all) {
            dispatch({types:TYPES.REMOVE_ALL_FROM_CART, payload:id})
        } else {
            dispatch({types:TYPES.REMOVE_ALL_FROM_CART, payload:id})
        }
    };
    
    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART});
    };

    return (
        <>
        <NavBar/>
        <div className="container mt-5 text-center">
           <h3>Productos</h3> 
           <div className="row justify-content-center">
               {products.map((product) => (
                <ProductItem key={product.id} data={product} addToCart={addToCart} />
                ))}
           </div>
           <h3>Carrito</h3>
           <div className="row justify-content-center">
               <button onClick={clearCart}  className="btn btn-light col-2">Limpiar Carrito</button><hr/>
               {cart.map((item, index) => (
                <CartItem key={index} data={item} delFromCart={delFromCart} />
                ))}
           </div>
           <br/>
           </div>
        </>
    )
}

export default ShoppingCart
