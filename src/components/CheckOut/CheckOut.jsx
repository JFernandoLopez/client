import { useState } from "react";
import axios from 'axios'

const CheckOut = ({id, userId}) => {
    const [checkOut, setCheckOut] = useState({
        id: id || "",
        userId: userId || ""
    })
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCheckOut({ ...checkOut, [name]: value });
    }

    const finishCheckOut = (event) => {
        event.preventDefault();
        axios.put('http://localhost:3001/check-out', checkOut)
        .then(res => alert(res))
        .catch(error => {
            console.log(error)
            alert('Something went wrong try one more time')})
    }

    return(
        <div className="form">
            <form onSubmit={finishCheckOut}>
                <label htmlFor='userId'>userId</label>
                <input type='text' name='userId' onChange={handleChange}/>

                <label htmlFor='id'>id Room</label>
                <input type='text' name='id'/>

                <input type='submit' value='Check Out'/>
            </form>
        </div>
    )
}

export default CheckOut;