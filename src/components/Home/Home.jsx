import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getRooms } from '../../redux/actions';

const Rooms = () => {
    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms);

    useEffect(() => {
        dispatch(getRooms());
    }, [])

    return(
        <div>
            <ul>
                {rooms?.forEach((room) => {
                    return <li key={room.id}>{room.type}</li>
                })}
            </ul>
        </div>
    )
}

export default Rooms;