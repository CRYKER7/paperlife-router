import React, { useReducer, useEffect } from 'react'
import { AuthReducer } from './Reducers/AuthReducers'
import { AuthContext } from './Context/AuthContext'
import AppRouter from './Routes/AppRouter'
import { db } from './firebase/firebaseConfig'
import { useSelector, useDispatch } from 'react-redux'; 
import { stock } from './Funciones/slice';

function App() {
    
  //Usamos <AuthContext.Provider> para poveer el contexto a toda la aplicación.
  return (
    //<AuthContext.Provider value={{dispatch}}>
      <AppRouter/>
    //</AuthContext.Provider>
  )
}

export default App;
