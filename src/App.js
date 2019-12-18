import React, { useState } from 'react';
import Form from './Form';

import './App.css';

function App() {
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', email: '', role: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)


  const [memberToEdit, setMemberToEdit] = useState({
    name: '',
    email: '',
    role: ''
  })

  const [team, setTeam] = useState([
    {
      id: 1,
      name: 'Cameron Hawley',
      email: 'cameronhawley@comcast.net',
      role: 'Student'
    }
  ]);

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

  console.log(memberToEdit)
  return (
    <div className="App">
      <h2>Add to my team</h2>
      <Form
      addNewMember={addNewMember}
      memberToEdit={memberToEdit}
      />
      <h1>My Team</h1>
      {team.map(person => (
        <div key={person.id}>
          <h2>Name: {person.name}</h2>
          <h3>Email: {person.email}</h3>
          <h3>Role: {person.role}</h3>
          <button onClick={() => setMemberToEdit(person)}>Edit</button>
          <button onClick={() => removeUser(person.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
