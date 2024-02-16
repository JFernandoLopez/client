import { useDispatch } from 'react-redux';
import { cleanUserRoom } from '../../redux/actions';
import './nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
    const dispatch = useDispatch()
    const handleErase = () => {
        dispatch(cleanUserRoom())
    }

return(
    <div className='nvb'>
        <nav>
            <ul className="navbar">
            <li><Link to='/'><button onClick={handleErase}>Home</button></Link></li>
            <li><Link to='/users'><button onClick={handleErase}>Users</button></Link></li>
            <li><Link to='/form'><button onClick={handleErase}>Check-In</button></Link></li>
            <li><Link to='/checkOut'><button onClick={handleErase}>Check-Out</button></Link></li>
            </ul>
        </nav>
    </div>
)}

export default Nav;