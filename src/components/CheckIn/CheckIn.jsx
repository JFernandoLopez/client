import './checkIn.css'

const CheckIn = (id, userId) => {


    return(
        <div className="form">
            <form >
                <label htmlFor='userId'>userId</label>
                <input type='text' name='userId'/>

                <label htmlFor="name">Name</label>
                <input type='text' name='name'/>

                <label htmlFor="email">Email</label>
                <input type='email' name='email'/>

                <label htmlFor="identityCard">Identity Card</label>
                <input type='text' name='identityCard'/>

                <label htmlFor='id'>id Room</label>
                <input type='text' name='id'/>

                <input type='submit' value='Check In'/>
            </form>
        </div>
    )
}

export default CheckIn;