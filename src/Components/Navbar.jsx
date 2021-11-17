import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container-fluid">
                <NavLink className="nav-brand text-uppercase text-white" to="/">
                    <img src="/logo192.png" alt="" className="logo" />PaperLife</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbaNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> 
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item px-lg-4">
                            <NavLink className="active text-uppercase text-white" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item px-lg-4">
                            <NavLink className="active text-uppercase text-white" to="/productos">Catálago</NavLink>
                        </li>
                        <li className="nav-item px-lg-4">
                            <NavLink className="active text-uppercase text-white" to="/contacto">Contacto</NavLink>
                        </li>
                    </ul>
                    <div className="nav-item px-lg-4 d-flex">
                            {/* Con operadores ternarios dependiendo del estado, agregar login o log out, datos de user */}
                            <NavLink className="active text-uppercase text-white" to="/contacto"><img className="logo" src="img/usuario.png" alt="user icon"/>&nbsp;Login</NavLink>
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
