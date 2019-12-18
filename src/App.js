import React, { useState } from 'react';
import Form from './Form';

import './App.css';

function App() {

  const [team, setTeam] = useState([
    {
      id: 1,
      name: 'Cameron',
      email: 'noemail@email',
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
      <p>{team[0].name}</p>
    </div>
  );
}

export default App;
