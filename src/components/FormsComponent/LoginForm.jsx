import React, { useState } from 'react'
import TextInput from '../common/TextInput'
import Joi from 'joi-browser';

export default function LoginForm() {
    const [account, setAccount] = useState({ username: '', password: '' })
    const [errors, setErrors] = useState({})

    const schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    const validate = () => {

        const options = { abortEarly: false };
        const result = Joi.validate(account, schema, options)
        console.log("Result from Joi:", result)

        if (!result.error) return null

        const errors = {}

        for (let item of result.error.details) {
            errors[item.path[0]] = item.message
        }

        return errors;
    }

    const validateProperty = (input) => {

        const { name, value } = input

        const obj = { [name]: value }
        const subSchema = {
            [name]: schema[name]
        }

        const result = Joi.validate(obj, subSchema)

        if (!result.error) {
            return null;
        }
        else {
            return result.error.details[0].message
        }

    }

    const handleChange = (event) => {
        // console.log("Event:", event)
        const { name, value } = event.currentTarget

        const errorsClone = { ...errors }
        const errorMessage = validateProperty(event.currentTarget)

        if (errorMessage) {
            errorsClone[name] = errorMessage
        }
        else {
            delete errorsClone[name]
        }

        setErrors(errorsClone)





        const accountClone = { ...account }
        accountClone[name] = value
        setAccount(accountClone)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = validate()
        setErrors(errors || {})
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
                    error={errors.username}
                />

                <TextInput
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    error={errors.password}
                />

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
