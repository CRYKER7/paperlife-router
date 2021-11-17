import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ data, addToCart }) => {
    let {idProducto, subId, nombre, precio} = data;
    const path = `/img/products/${subId}.jpg`;
    
    return (
        <div className="card m-3 col-xs-12 col-md-3 text-center align-items-center" >
            <h3 className="card-title text-uppercase tutulo-personal">#{subId} {nombre}</h3>
            <img className="card-img-top" src={path} alt={nombre} style={{ width: "80%", height: "70%"}} />
            <div className="card-body">
                
                <div className="card-text">
                    <h4>$ {precio}.00 MXN</h4> 
                    <Link className="card-link text-black" to={`/producto/${idProducto}` }>
                        Ver Más ...
                    </Link>
                    <br/>
                    <button onClick={() => addToCart(idProducto)} className="btn btn-light">Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default Card
