import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getRoom, getRooms, getUser } from "../../redux/actions";

const CheckOut = () => {
    const dispatch = useDispatch()
    const [checkOut, setCheckOut] = useState({
        id: "",
    })
    const {rooms} = useSelector((state) => state)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCheckOut({ ...checkOut, [name]: value });
    }

    useEffect(() => {
        const filtred = rooms?.filter((room) => room.status)
        if(filtred?.length < 2){
            const myId = filtred[0]
            setCheckOut({...checkOut, id: myId?.id})
        }
    }, [])

    const finishCheckOut = async (event) => {
        event.preventDefault();
        try {
            await axios.put('http://localhost:3001/check-out', checkOut)
            alert('Check-out successful');
            dispatch(getRooms());
        } catch (error) {
            console.log(error)
            alert('Something went wrong, please try again.')
        }
    }

    return(
        <div className="form">
            <form onSubmit={finishCheckOut}>
                <select name='id' onChange={handleChange}>
                {rooms?.sort((a, b)=> {
                    return a.id - b.id
                }).map((room) => {
                    if(room.status){
                        return(<option value={room.id} key={room.id}>{`Room ${room.id}`}</option>)
                    }
                })}
                </select>
                <label htmlFor="id">#Room</label>

                <input type="submit" value='Check Out'/>

            </form>
        </div>
    )
}

export default CheckOut;
