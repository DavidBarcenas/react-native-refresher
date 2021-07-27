import { useEffect, useState } from 'react';
import { reqResAPI } from '../api/reqRes';
import { ReqRes, User } from '../interfaces/reqRes';

export const Users = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        reqResAPI.get<ReqRes>('/users')
            .then(resp => {
                setUsers(resp.data.data)
            })
            .catch(console.warn)
    }, [])

    return (
        <>
            <div className="alert alert-primary">Users</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                </thead>   
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <img src={user.avatar} alt={user.first_name} className="img-thumbnail" width="60"  />
                                </td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }    
                </tbody> 
            </table> 
        </>
    )
}
