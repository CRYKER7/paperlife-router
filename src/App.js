import React, { useReducer, useEffect } from 'react';
import { AuthReducer } from './Reducers/AuthReducers'
import { AuthContext } from './Context/AuthContext'
import AppRouter from './Routes/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('log')) || {log: false}
};

function App() {
  const [log, dispatch] = useReducer( AuthReducer , {}, init);

  //Definimos un useEffect para persistir el estado del log
  useEffect(() => {
    localStorage.setItem('log', JSON.stringify(log));
  }, [log])

  //Usamos <AuthContext.Provider> para poveer el contexto a toda la aplicación.
  return (
    <AuthContext.Provider value={{log, dispatch}}>
      <AppRouter/>
    </AuthContext.Provider>
  )
}

export default App;
