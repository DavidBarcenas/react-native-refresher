import { useUsers } from '../hooks/useUsers';

export const Users = () => {
    const {users, nextPage, prevPage} = useUsers()

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
                                    <img src={user.avatar} 
                                         alt={user.first_name} 
                                         width="60"  
                                    />
                                </td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }    
                </tbody> 
            </table> 
            <button onClick={prevPage} className="btn btn-primary">Prev</button>
            <button onClick={nextPage} className="btn btn-primary ms-2">Next</button>
        </>
    )
}
