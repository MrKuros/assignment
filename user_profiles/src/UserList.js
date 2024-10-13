import React from 'react';

export default function UserList({ users }) {
  if (users.length === 0) {
    return <p>No users available</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="mb-2 p-2 border rounded">
          <strong>ID: {user.id}</strong> - {user.name}, {user.age} years old, {user.occupation}
        </li>
      ))}
    </ul>
  );
}
