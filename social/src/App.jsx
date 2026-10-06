import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function App() {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        try{
            axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            const users = response.data;
            setUsers(users);
        });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }, []);

    return <>
    <ul>
      {users.map((user) => (
        <li key={user.id} style={{border: '1px solid black', margin: '10px', padding: '10px', borderRadius: '20px', textDecoration: 'none', listStyleType: 'none'}}>
          <span><strong>{user.name}</strong></span>
          <p>Username: {user.username}</p>
          <p>E-mail:{user.email}</p>
        </li>
        )
      )
    }
  </ul>
    </>
}