import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './checkIn.css'
import axios from 'axios';

const CheckIn = () => {
    const {user} = useSelector((state) => state)
    const {rooms} = useSelector((state) => state)
    const filtred = rooms?.filter((room) => !room.status)
    const [information, setInformation] = useState({
        name: user?.name || "",
        id: ""
    })

    useEffect(() => {
        if(filtred?.length < 2){
            const myId = filtred[0]
            setInformation({...information, id: myId?.id})
        }
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInformation({ ...information, [name]: value });
        console.log("ID en la ubicación:", location.state);
    }

    const submitCheckIn = (event) => {
        try {
            axios.put('http://localhost:3001/check-in', information)
            alert('Check-in successful');
            document.getElementsByName('name').value = "";
            document.getElementsByName('id').value = "";
            dispatch(getRooms());
        } catch (error) {
            console.log(error)
            alert('Something went wrong, please try again.')
        }
    }

    return(
        <div className="form">
            <h1>Check In</h1>
            <form onSubmit={submitCheckIn}>
                <label htmlFor="name">Name</label>
                <input type='text' name='name' onChange={handleChange} value={information.name} minlength='3' required/>

                <label htmlFor='id'>id Room</label>
                <select name='id' onChange={handleChange}>
                    {rooms?.sort((a, b)=> {
                        return a.id - b.id
                    }).map((room) => {
                        if(!room.status){
                            return(<option value={room.id} key={room.id}>{`Room ${room.id}`}</option>)
                        }
                    })}
                </select>

                <input type='submit' value='Check In'/>
            </form>
        </div>
    )
}

export default CheckIn;