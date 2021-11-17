import React,{ useReducer } from 'react'
import { useParams } from 'react-router'
import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer'

import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar';

const CharacterScreen =({ history }) => {
    const { id } = useParams();
    //console.log(id);

    /*const { type, name, description } = Characters.find((character) => character.id === id);*/
    const [state] = useReducer(shoppingReducer, shoppingInitialState);
    let producto = state.products.find(product => product.idProducto === id);
    console.log(producto);

    const path = `/img/products/${id}.jpeg`;
    
    return (
        <>
        <NavBar/>
        <div className="container mt-5 text-center">
            <div className="card m-3 col-12 text-center align-items-center" >
                <br/>
                <img className="card-img-top" src={path} alt={producto.nombre} style={{ width: "80%", height: "70%"}} />
                <div className="card-body">
                    <h3 className="card-title"># {producto.idProducto} {producto.nombre}</h3>
                    <div className="card-text">
                        <h4>$ {producto.precio}.00 MXN</h4> 
                        {/*<button onClick={() => addToCart(idProducto)} className="btn btn-light">Agregar</button>*/}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default CharacterScreen;