import React, { useState, useEffect } from 'react';

const Form = ({addNewMember, memberToEdit}) => {
    
    useEffect(() => {
        setMember(memberToEdit)
    }, [memberToEdit])

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
    
    return (
        <form onSubmit={submitForm}>
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
            <button type="submit">Add member</button>
        </form>
    )
}

export default Form;