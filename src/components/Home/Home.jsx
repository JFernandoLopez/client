import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getRooms } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { getRoom } from '../../redux/actions';

const Rooms = () => {
    const dispatch = useDispatch();
    const {rooms} = useSelector((state) => state);

    useEffect(() => {
        dispatch(getRooms());
    }, [])

    const giveMeUserRoom = (id) => {
        dispatch(getRoom(id));
    }

    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th><h1>Rooms</h1></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h4># Room</h4></td>
                        <td><h4>Type</h4></td>
                        <td><h4>Floor</h4></td>
                        <td><h4>Price</h4></td>
                        <td><h4>Description</h4></td>
                        <td><h4>Status</h4></td>
                        <td><h4>User</h4></td>
                    </tr>
                {rooms?.map((room) => {
                    return (
                    <tr key={room.id}>
                        <td>{!room.status ? <Link to='/form'><button onClick={() => giveMeUserRoom(room.id)}>{room.id}</button></Link> :
                        <Link to='/checkOut'><button onClick={() => giveMeUserRoom(room.id)}>{room.id}</button></Link>}</td>
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