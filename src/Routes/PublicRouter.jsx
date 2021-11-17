import React from 'react';
import { Navigate, Route } from 'react-router';

const PublicRouter = ({ auth, component: Component, ...rest }) => {
    return <Route 
    {...rest} 
    component={(props) => !auth.log ? <Component {...props} /> : <Navigate to="/" />} />
};

export default PublicRouter;
