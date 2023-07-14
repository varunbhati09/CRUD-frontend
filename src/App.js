import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './UserList';
import CreateUser from './CreateUser';
import ViewUser from './ViewUser';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/users/:id" element={<ViewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
