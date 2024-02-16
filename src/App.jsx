import { Link } from 'react-router-dom';
import './App.css'
import { Routes, Route } from 'react-router';
import Rooms from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Users from './components/Users/Users';

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Rooms/>}></Route> 
        <Route path='/users' element={<Users/>}></Route> 
        <Route path='/form'></Route> 
        <Route path='/checkOut'></Route> 
      </Routes>    
      </div>
  )
}

export default App;
