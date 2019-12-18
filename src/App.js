import React, { useState } from 'react';
import Form from './Form';

import './App.css';

function App() {

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

  return (
    <div className="App">
      <h2>Add to my team</h2>
      <Form
      addNewMember={addNewMember}
      />
      <h1>My Team</h1>
      {team.map(member => (
        <div key={member.id}>
          <h2>Name: {member.name}</h2>
          <h3>Email: {member.email}</h3>
          <h3>Role: {member.role}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
