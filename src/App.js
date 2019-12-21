import React, { useState } from 'react';
import EditUserForm from './EditUserForm';
import MyForm from './Form';
// Styles
import './App.css';
import styled from 'styled-components';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

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
  
  const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  `;
  const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `;
  const PeopleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: space-around;
  `;
  const Title = styled.h1`
  font-size: 3rem;
  `;
  return (
    <div className="App">
      <Title>Cam's Coders</Title>
      <div>
        {editing ? (
          <Container>
            <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updatedUser={updatedUser}
            />
          </Container>
        ) : (
          <Container>
            <MyForm
            addNewMember={addNewMember}
            />
          </Container>
        )}
      </div>
      <PeopleContainer>
      {team.map(person => (
        <div style={{margin: '10px'}}>
          <Card key={person.id}>
            <CardHeader>Name: {person.name}</CardHeader>
            <CardBody>
              <CardTitle>Email: {person.email}</CardTitle>
              <CardText>Role: {person.role}</CardText>
            </CardBody>
            <CardFooter>
              <ButtonContainer>
                <Button color="success" onClick={() => editMember(person)}>Edit</Button>
                <Button color="danger" onClick={() => removeUser(person.id)}>Delete</Button>
              </ButtonContainer>
            </CardFooter>
          </Card>
        </div>
      ))}
      </PeopleContainer>
    </div>
  );
}

export default App;
