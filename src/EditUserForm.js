import React, { useState } from 'react'

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
    }

    return (
    <form
        onSubmit={event => {
        event.preventDefault()

        props.updatedUser(user.id, user)
        }}>
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
        <label>Email</label>
        <input type="text" name="email" value={user.email} onChange={handleInputChange} />
        <label>Role</label>
        <input type="text" name="role" value={user.role} onChange={handleInputChange} />
        <button>Update user</button>
        <button onClick={() => props.setEditing(false)}>
        Cancel
        </button>
    </form>
    )
}

export default EditUserForm;