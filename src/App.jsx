import { Link } from 'react-router-dom';
import './App.css'
import { Routes, Route } from 'react-router';
import Rooms from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Users from './components/Users/Users';
import CheckIn from './components/CheckIn/CheckIn';
import CheckOut from './components/CheckOut/CheckOut';

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Rooms/>}></Route> 
        <Route path='/users' element={<Users/>}></Route> 
        <Route path='/form' element={<CheckIn/>}></Route> 
        <Route path='/checkOut' element={<CheckOut/>}></Route> 
      </Routes>    
      </div>
  )
}

export default App;
