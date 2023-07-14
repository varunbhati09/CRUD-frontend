import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UserList.css'; 

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  const deleteUser = (userId) => {
    fetch(`http://localhost:3001/users/${userId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(() => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Link to={`/users/${user.id}`} className="action-link">View</Link>{' '}
                <Link to={`/create?id=${user.id}`} className="action-link">Edit</Link>{' '}
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/create" className="add-user-link">Add User</Link>
    </div>
  );
}

export default UserList;
