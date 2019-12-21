import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';

const MyForm = ({addNewMember}) => {
    
    useEffect(() => {
        
    }, [])

    const [member, setMember] = useState({
        id: null,
        name: '',
        email: '',
        role: ''
    })

    
    const handleChange = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
        console.log(event.target.value)
    }
    
    const submitForm = event => {
        event.preventDefault();
        if (!member.name || !member.email) return
        addNewMember(member);
        setMember({name: '', email: '', role: ''});
    };

    const FormContainer = styled.div`
    width: 300px;
    
    `;

    return (

        <FormContainer>
            <Form onSubmit={submitForm}>
                <h2>Add</h2>
                <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input
                    id="name"
                    placeholder="name"
                    name="name"
                    type="text"
                    value={member.name}
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                    id="email"
                    placeholder="email"
                    name="email"
                    type="text"
                    value={member.email}
                    onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="role">Role</Label>
                    <Input
                    id="role"
                    placeholder="role"
                    name="role"
                    type="text"
                    value={member.role}
                    onChange={handleChange}
                    />
                </FormGroup>
                <Button color="success" type="submit">Add member</Button>
            </Form>
        </FormContainer>
    )
}

export default MyForm;