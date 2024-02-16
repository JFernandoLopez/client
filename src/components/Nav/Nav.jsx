import './nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
return(
    <div className='nvb'>
        <nav>
            <ul className="navbar">
            <li><Link to='/'><button>Home</button></Link></li>
            <li><Link to='/users'><button>Users</button></Link></li>
            <li><Link to='/form'><button>Check-In</button></Link></li>
            <li><Link to='/checkOut'><button>Check-Out</button></Link></li>
            </ul>
        </nav>
    </div>
)}

export default Nav;