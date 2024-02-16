import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './checkIn.css'
import axios from 'axios';

const CheckIn = () => {
    const {room} = useSelector((state) => state)
    const {user} = useSelector((state) => state)
    const [information, setInformation] = useState({
        name: user?.name || "",
        id: room?.id || ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInformation({ ...information, [name]: value });
    }

    const submitCheckIn = (event) => {
        event.preventDefault()
        axios.put('http://localhost:3001/check-in', information)
        .then(res => alert(res))
        .catch(error => {
            console.log(error)
            alert('Try another Room please')})
        
        document.getElementsByName('name').value = "";
        document.getElementsByName('id').value = "";
    }

    return(
        <div className="form">
            <form onSubmit={submitCheckIn}>
                <label htmlFor="name">Name</label>
                <input type='text' name='name' onChange={handleChange} value={information.name}/>

                <label htmlFor='id'>id Room</label>
                <input type='number' name='id' onChange={handleChange} value={information.id} max='30'/>

                <input type='submit' value='Check In'/>
            </form>
        </div>
    )
}

export default CheckIn;