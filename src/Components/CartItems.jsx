import React from 'react'
import { Link } from 'react-router-dom';

const CartItems = ({data, delFromCart}) => {
    let {idProducto, nombre, precio, quantity} = data;
    const path = `/img/products/${idProducto}.jpg`;

    return ( 
        <div className="m-3 col-10 card row" >
            <div className="col-2">
                <img  src={path} alt={nombre} style={{ width: "80%", height: "80%"}} />
            </div>
            <div className="col-8">
                <h4 className="row">#{idProducto} {nombre}</h4>
                <h5 className="row">$ {precio}.00 x {quantity} = $ {precio * quantity} </h5>
                <p className="row">
                    <Link className="text-black" to={`/character/${idProducto}`}>
                        Ver Más ...
                    </Link>
                    <br/>
                    <button className="btn btn-light col-3" onClick={() => delFromCart(idProducto)} >Eliminar Uno</button>
                    &nbsp;
                    <button className="btn btn-light col-3" onClick={() => delFromCart(idProducto, true)} >Eliminar Todos</button>
                </p>
            </div>
        </div>
    )
}

export default CartItems
