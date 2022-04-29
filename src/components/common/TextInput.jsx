import React from 'react'

export default function TextInput(props) {

    const { name, type, label, onChange } = props
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className='form-control'
                id={name}
                name={name}
                onChange={onChange}
            />
        </div>
    )
}
