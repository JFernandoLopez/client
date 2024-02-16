import { Link } from 'react-router-dom';
import './App.css'
import { Routes, Route } from 'react-router';
import Rooms from './components/Home/Home';

function App() {

  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/form'>Check-In</Link></li>
          <li><Link to='/check-out'>Check-Out</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Rooms/>}></Route> 
        <Route path='/users'></Route> 
        <Route path='/form'></Route> 
        <Route path='/check-out'></Route> 
      </Routes>    
      </div>
  )
}

export default App;
