import React from 'react';
import { Navigate, Route } from 'react-router';

//component: Representa el componente que vamos a renderizar
const PivateRouter = ({ auth, component: Component, ...rest }) => {

    return <Route 
    {...rest} 
    component={(props) => auth.log ? <Component {...props} /> : <Navigate to="/" />}/>
};

export default PivateRouter;
