import React, { useState } from 'react';
import EditUserForm from './EditUserForm';

import Form from './Form';

import './App.css';

function App() {
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', email: '', role: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const [team, setTeam] = useState([
    {
      id: 1,
      name: 'Cameron Hawley',
      email: 'cameronhawley@comcast.net',
      role: 'Student'
    }
  ]);

  const editMember = user => {
    setEditing(true)
    setCurrentUser({id: user.id, name: user.name, email: user.email, role: user.role})
  }

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeam([...team, newMember]);
  }

  const removeUser = id => {
    setTeam(team.filter(user => user.id !== id))
  }

  const updatedUser = (id ,updatedUser) => {
    setEditing(false)
    setTeam(team.map(user => (user.id === id ? updatedUser : user)))
  }
  
  return (
    <div className="App">
      <h2>Add to my team</h2>
      <div>
        {editing ? (
          <div>
            <h2>Edit</h2>
            <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updatedUser={updatedUser}
            />
          </div>
        ) : (
          <div>
            <h2>Hi</h2>
          </div>
        )}
      </div>
      <Form
      addNewMember={addNewMember}
      
      />
      <h1>My Team</h1>
      {team.map(person => (
        <div key={person.id}>
          <h2>Name: {person.name}</h2>
          <h3>Email: {person.email}</h3>
          <h3>Role: {person.role}</h3>
          <button onClick={() => editMember(person)}>Edit</button>
          <button onClick={() => removeUser(person.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
