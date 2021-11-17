import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalogo from '../Paginas/Catalogo';
import Inicio from '../Paginas/Inicio';

const AppRouter = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>} />    
                <Route exact path="/productos" element={<Catalogo />} />
                {/* Redirect cambio por Navigate to */}
                <Route path="*" element={<Inicio/>} />
            </Routes>
        </Router>
        </>
    )
}

export default AppRouter
