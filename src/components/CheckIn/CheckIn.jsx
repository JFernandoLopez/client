import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRooms } from '../../redux/actions';
import './checkIn.css'
import axios from 'axios';

const CheckIn = () => {
    const {rooms} = useSelector((state) => state)
    const filtred = rooms?.filter((room) => !room.status)
    const dispatch = useDispatch();
    const [information, setInformation] = useState({
        name: "",
        id:  filtred[0]?.id || ""
    })

    useEffect(() => {
        if(filtred?.length < 2){
            const myId = filtred[0]
            setInformation({...information, id: myId?.id})
        }
    }, [rooms])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInformation({ ...information, [name]: value });
        console.log("ID en la ubicación:", location.state);
    }

    const submitCheckIn = (event) => {
        event.preventDefault()
        try {
            axios.put('http://localhost:3001/check-in', information)
            .then(() => {
                document.getElementsByName('name').value = ""
                document.getElementsByName('id').value = ""
                dispatch(getRooms())
                alert('Check-in successful')
            }).catch((error) => alert('User Has a Room'))
        } catch (error) {
            console.log(error)
            alert('Please try again')
        }
    }

    return(
        <div className="form">
            <h1>Check In</h1>
            <form onSubmit={submitCheckIn}>
                <label className='form' htmlFor="name">Name</label>
                <input className='form' type='text' name='name' onChange={handleChange} value={information.name} minLength='3' required/>

                <label className='form' htmlFor='id'>id Room</label>
                <select className='form' name='id' onChange={handleChange}>
                    {rooms?.sort((a, b)=> {
                        return a.id - b.id
                    }).map((room) => {
                        if(!room.status){
                            return(<option value={room.id} key={room.id}>{`Room ${room.id}`}</option>)
                        }
                    })}
                </select>

                <input className='formButoon' type='submit' value='Check In'/>
            </form>
        </div>
    )
}

export default CheckIn;