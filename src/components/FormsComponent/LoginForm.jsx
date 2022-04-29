import React, { useState } from 'react'
import TextInput from '../common/TextInput'

export default function LoginForm() {
    const [account, setAccount] = useState({ username: 'codewithz', password: '' })

    const handleChange = (event) => {
        console.log("Event:", event)
        const { name, value } = event.currentTarget
        const accountClone = { ...account }
        accountClone[name] = value
        setAccount(accountClone)
    }
    // const handleChangePassword = (event) => {
    //     console.log("Event:", event)
    //     const accountClone = { ...account }
    //     accountClone.password = event.currentTarget.value
    //     setAccount(accountClone)
    // }

    return (
        <div>
            <h1>LoginForm</h1>
            <form>

                <TextInput
                    name="username"
                    label="Username"
                    type="text"
                    onChange={handleChange} />

                <TextInput
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleChange} />

                <button className="btn btn-warning btn-sm m-2">Login</button>
            </form>

            <p>Username:{account.username}</p>
            <p>Password:{account.password}</p>
        </div>
    )
}
