import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ nombre, idProducto, precio }) => {
    const path = `/img/products/${idProducto}.jpeg`;

    return (
        <div className="card m-3 col-xs-12 col-md-3 text-center align-items-center" >
            <br/>
            <img className="card-img-top" src={path} alt={nombre} style={{ width: "80%", height: "70%"}} />
            <div className="card-body">
                <h3 className="card-title"># {idProducto} {nombre}</h3>
                <p className="card-text">
                    <h4>$ {precio}.00 MXN</h4> 
                    <Link className="card-link text-black" to={`/character/${idProducto}`}>
                        Ver Más ...
                    </Link>
                    <br/>
                    <button className="btn btn-light" >Agregar</button>
                </p>
            </div>
        </div>
    )
}

export default Card
