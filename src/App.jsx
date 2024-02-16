import './App.css'
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import Rooms from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Users from './components/Users/Users';

const CheckIn = React.lazy(() => import('./components/CheckIn/CheckIn'));
const CheckOut = React.lazy(() => import('./components/CheckOut/CheckOut'));
const LoadingComponent = () => <div>Loading...</div>;

function App() {
    const { pathname } = useLocation(); // Mueve esta línea dentro de la función App()
    const [loadingTimeout, setLoadingTimeout] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoadingTimeout(false);
      }, 2000); // Tiempo de espera en milisegundos (1 segundo en este ejemplo)
      
      return () => clearTimeout(timer);
    }, [pathname]);

    if (loadingTimeout) {
      return <LoadingComponent />;
    }

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Rooms />} />
        <Route path="/users"  element={<Users />} />
        <Route path='/form' exact element={loadingTimeout ? <LoadingComponent /> : <CheckIn />} />
        <Route path='/checkOut' exact element={loadingTimeout ? <LoadingComponent /> :<CheckOut />}/>
      </Routes>  
      </div>
  )
}

export default App;

