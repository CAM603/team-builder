import React, { useState } from 'react';

const Form = ({addNewMember}) => {
    

    const [member, setMember] = useState({
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
        addNewMember(member);
        setMember({name: '', email: '', role: ''});
    };
    console.log(member)
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
            id="name"
            placeholder="name"
            name="name"
            type="text"
            value={member.name}
            onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
            id="email"
            placeholder="email"
            name="email"
            type="text"
            value={member.email}
            onChange={handleChange}
            />
            <label htmlFor="role">Role</label>
            <input
            id="role"
            placeholder="role"
            name="role"
            type="text"
            value={member.role}
            onChange={handleChange}
            />
        </form>
    )
}

export default Form;