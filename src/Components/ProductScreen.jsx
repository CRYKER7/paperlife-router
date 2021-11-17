import React from 'react'
import { useParams } from 'react-router';
import NavBar from './Navbar';

const ProductScreen  = ({ history }) => {
    const { id } = useParams();
    const path = `/assets/-${id}.png`;
    
    return (
        <>
        <NavBar/>
        <div className="container row mt-3">
            <div className="col-8">
                <img className="img-thumbnail"
                style={{
                    width: "60%", height: "80%"
                }}
                src={path}
                alt={id} />
            </div>
            <div className="col-4">
                {/*}
                <h2>Nombre: {nombre}</h2>
                <p>Descripcion: {description}</p>
            
                <button onClick={handleBack} className="btn btn-outline-warning">Go Back</button>
                */}
            </div>
        </div>
        </>
    )
}

export default ProductScreen
