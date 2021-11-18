import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ data, addToCart }) => {
    let {idProducto, subId, nombre, precio} = data;
    const path = `/img/products/${subId}.jpg`;
    
    return (
        <div className="col-xs-10 col-md-4" >
            <div className="card text-center align-items-center">
                <Link className="card-link text-black" to={`/producto/${idProducto}` }>
                <h3 className="card-title text-uppercase tutulo-personal">#{subId} {nombre}</h3>
                <img className="card-img-top" src={path} alt={nombre} style={{ width: "80%", height: "80%"}} />
                </Link>
                <div className="card-body row col-8 text-center align-items-center">
                    <h4 className="card-text col-10">$ {precio}.00 MXN</h4> 
                    <Link className="card-link btn col-12 text-black" to={`/producto/${idProducto}` }>Ver Más ...</Link>
                    <br/>
                    <button onClick={() => addToCart(idProducto)} className="btn btn-light">Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default Card
