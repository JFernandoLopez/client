import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getRooms } from '../../redux/actions';
import { Link } from 'react-router-dom';
import './home.css'

const Rooms = () => {
    const dispatch = useDispatch();
    const {rooms} = useSelector((state) => state);

    useEffect(() => {
        dispatch(getRooms());
    }, [])

    return(
        <div className='rooms'>
            <table className='rooms'>
                <thead>
                <tr>
                    <th><h1 className='rooms'>Rooms</h1></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h4 className='rooms'># Room</h4></td>
                        <td><h4 className='rooms'>Type</h4></td>
                        <td><h4 className='rooms'>Floor</h4></td>
                        <td><h4 className='rooms'>Price</h4></td>
                        <td><h4 className='rooms'>Description</h4></td>
                        <td><h4 className='rooms'>Status</h4></td>
                        <td><h4 className='rooms'>User</h4></td>
                    </tr>
                {rooms?.map((room) => {
                    return (
                    <tr key={room.id}>
                        <td className='rooms'>{!room.status ? <Link to='/form'><button className='rooms'>{room.id}</button></Link> :
                        <Link to={'/checkOut'}><button>{room.id}</button></Link>}</td>
                        <td>{room.type}</td>
                        <td>{room.floor}</td>
                        <td>{room.price}</td>
                        <td>{room.description}</td>
                        <td>{!room.status ? <p style={{color: 'green'}}>Free</p> : <p style={{color: 'red'}}>Occupied</p>}</td>
                        <td>{room?.User?.name}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Rooms;