import React,{ useReducer } from 'react'
import { useParams } from 'react-router'
import { TYPES } from '../Actions/shoppingActions';
import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer'

import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar';

const CharacterScreen =({ history }) => {
    const { id } = useParams();
    //console.log(id);

    /*const { type, name, description } = Characters.find((character) => character.id === id);*/
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    let producto = state.products.find(product => product.idProducto === id);
    //console.log(producto);

    const path = `/img/products/${id}.jpg`;
    
    const addToCart = (id) => {
        //console.log(id)
        dispatch({type:TYPES.ADD_TO_CART,payload: id});
    };

    
    return (
        <>
        <NavBar/>
        <div className="container mt-5 text-center">
            <div className="card text-center align-items-center row" >
                <div className="row">
                    <div className="col-xs-10 col-md-4 d-flex align-items-center" style={{ width: "400px", height: "400px"}}>
                        <img className="card-img " src={path} alt={producto.nombre} style={{ width: "90%", height: "90%"}} />
                    </div>
                    <div className="col-xs-10 col-md-5 align-items-start text-start mt-3">
                        <h3 className="card-title">{producto.nombre}</h3>
                        <div className="card-text">
                            <h3 className="card-text">{producto.description}</h3>
                            <h3 className="card-text">Categoria: {producto.categoria}</h3>
                            <h4>Precio:$ {producto.precio}.00 MXN</h4> 
                            <button onClick={() => addToCart(producto.idProducto)} className="btn btn-light">Agregar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
        </>
    );
};

export default CharacterScreen;