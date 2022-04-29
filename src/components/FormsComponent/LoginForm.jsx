import React, { useState } from 'react'

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
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className='form-control'
                        id='username'
                        name='username'
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className='form-control'
                        id='password'
                        name='password'
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-warning btn-sm m-2">Login</button>
            </form>

            <p>Username:{account.username}</p>
            <p>Password:{account.password}</p>
        </div>
    )
}
