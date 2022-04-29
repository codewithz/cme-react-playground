import React, { useState } from 'react'
import TextInput from '../common/TextInput'

export default function LoginForm() {
    const [account, setAccount] = useState({ username: '', password: '' })
    const [errors, setErrors] = useState({})

    const validate = () => {
        const errors = {}

        if (account.username.trim() === '') {
            errors.username = 'Username is required'
        }

        if (account.password.trim() === '') {
            errors.password = 'Password is required'
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }

    const handleChange = (event) => {
        // console.log("Event:", event)
        const { name, value } = event.currentTarget
        const accountClone = { ...account }
        accountClone[name] = value
        setAccount(accountClone)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = validate()
        console.log(errors)

        if (errors) return;

        //Call the backend server
        // Or any other operation
        console.log("Submitted")
    }

    const handleReset = () => {
        setAccount({ username: '', password: '' })
    }

    return (
        <div>
            <h1>LoginForm</h1>
            <form onSubmit={handleSubmit} onReset={handleReset}>

                <TextInput
                    name="username"
                    label="Username"
                    type="text"
                    onChange={handleChange}
                />

                <TextInput
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleChange} />

                <button type="submit" className="btn btn-warning btn-sm m-2">Login</button>
                &nbsp;
                <button type="reset" className="btn btn-warning btn-sm m-2">Reset</button>
                &nbsp;
            </form>

            <p>Username:{account.username}</p>
            <p>Password:{account.password}</p>
        </div >
    )
}
