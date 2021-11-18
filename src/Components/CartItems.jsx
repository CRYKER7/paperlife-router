import React from 'react'
import { Link } from 'react-router-dom';


const CartItems = ({data, delFromCart}) => {
    let {idProducto, subId, nombre, precio, categoria, quantity} = data;
    const path = `/img/products/${subId}.jpg`;

    return (
        <> 
        <div className="container m-3 col-md-10 card row d-flex align-items-center ">
            <div className="row col-10" >
                <Link className="col-3 text-black" to={`/producto/${idProducto}` }>
                    <div className="col-md-3 col-xs-10 d-flex align-items-center" >
                        <img src={path} alt={nombre} className="img-cart" style={{ width: "150px"}}/>
                    </div>
                </Link>
                <div className="col-md-9 col-xs-10 d-flex align-items-center row">
                    <Link className="text-black" to={`/producto/${idProducto}` }>
                    <h4 className="row text-uppercase">#{subId} {nombre} - {categoria}</h4>
                    <h5 className="row">$ {precio}.00 x {quantity} = $ {precio * quantity}.00 MXN </h5>
                    </Link>
                    
                    <div className="card-text row text-centeralign-items-center">
                        <Link className="col-3 btn text-black" to={`/producto/${idProducto}`} >
                            Ver Más ...
                        </Link>&nbsp;&nbsp;
                        <button className="col-3 btn btn-light" onClick={() => delFromCart(idProducto)} >Eliminar Uno</button>&nbsp;&nbsp;
                        <button className="col-3 btn btn-light" onClick={() => delFromCart(idProducto, true)} >Eliminar Todos</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default CartItems
