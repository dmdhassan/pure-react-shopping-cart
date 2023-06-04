import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const User = () => {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        async function getUser() {
            const result = await axios('https://jsonplaceholder.typicode.com/users')
            setUsers(result.data)
        }

        getUser()
    })
    return ( 
        <div>
            {
                users.map(user => {
                    return (
                        <li key={user.id}>{user.name}</li>
                    )
                })
            }
        </div>
     );
}
 
export default User;