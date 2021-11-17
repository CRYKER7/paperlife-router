import React from 'react'
import Footer from '../Components/Footer'
import Card from '../Components/Card';
import { Products } from '../Models/Products'
import NavBar from '../Components/Navbar'

const Catalogo = () => {
    const prods = Products.filter((product) => product.estatus === "active");
    console.log(prods);

    return (
        <>
        <NavBar/>
        <div className="container mt-2 text-center ">
            <h1>Productos </h1>
            <hr />

            <div className="row text-center justify-content-center">
                <div className="row-2"/>
                {
                    prods.map((prod) => (
                        <Card key={prod.id} {...prod} />                    
                    ))
                }
            </div>
        </div> 

        <Footer/>
        </>
    )
}

export default Catalogo
