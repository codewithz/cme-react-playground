import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <h1>LoginForm</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className='form-control' id='username' />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form-control' id='password' />
                </div>
                <button className="btn btn-warning btn-sm m-2">Login</button>
            </form>
        </div>
    )
}