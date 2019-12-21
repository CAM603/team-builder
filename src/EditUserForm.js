import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
    }

    const FormContainer = styled.div`
    width: 300px;
    `;
    const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    `;
    return (
    <FormContainer>
        <Form
            onSubmit={event => {
            event.preventDefault()

            props.updatedUser(user.id, user)
            }}>
            <h2>Edit</h2>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" value={user.name} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
                <Input type="text" name="email" value={user.email} onChange={handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label>Role</Label>
                <Input type="text" name="role" value={user.role} onChange={handleInputChange} />
            </FormGroup>
            <ButtonContainer>
            <Button color="success">Update user</Button>
            <Button color="danger" onClick={() => props.setEditing(false)}>
            Cancel
            </Button>
                
            </ButtonContainer>
        </Form>
    </FormContainer>
    )
}

export default EditUserForm;