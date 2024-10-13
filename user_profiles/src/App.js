import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

export default function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile App</h1>
      <UserForm onAddUser={addUser} />
      <UserList users={users} />
    </div>
  );
}
