import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from '../Components/ProductScreen';
import Catalogo from '../Paginas/Catalogo';
import Inicio from '../Paginas/Inicio';

const AppRouter = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>} />    
                <Route exact path="/productos" element={<Catalogo />} />
                <Route exact path="/producto/:id" component={<ProductScreen/> } />
                {/* Redirect cambio por Navigate to */}
                <Route path="*" element={<Inicio/>} />
            </Routes>
        </Router>
        </>
    )
}

export default AppRouter
