import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../../redux/actions"

const Users = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th><h1>Users</h1></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h4>ID</h4></td>
                        <td><h4>Name</h4></td>
                        <td><h4>Email</h4></td>
                        <td><h4>identityCard</h4></td>
                        <td><h4>Room</h4></td>
                        <td><h4>Type</h4></td>
                    </tr>
                {users?.map((user) => {
                    return (
                    <tr key={user.id}>
                        <td><button>{user.id}</button></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.identityCard}</td>
                        <td>{!user.RoomId ? <p style={{color: 'red'}}>none</p> : <p style={{color: 'green'}}>{user.RoomId}</p>}</td>
                        <td>{!user.Room ? <p style={{color: 'red'}}>none</p> : <p style={{color: 'green'}}>{user.Room}</p>}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Users;