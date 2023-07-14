import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ViewUser.css'; // Import the CSS file

function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/users/${id}`)
    .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-user-container"> 
      <h1>View User</h1>
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{user.id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ViewUser;
