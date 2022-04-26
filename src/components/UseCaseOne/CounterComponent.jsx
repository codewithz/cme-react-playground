import React, { useState } from 'react'

export default function CounterComponent() {

    const [name, setName] = useState('Zartab')
    const [counter, setCounter] = useState(0)

    const changeName = () => {
        setName("Zartab Nakhwa")
    }

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h4>Counter Component</h4>
            <h3><b>{name}</b></h3>
            <h2>Counter:{counter}</h2>
            <br />
            <button onClick={increment}>Increment</button> &nbsp;&nbsp;
            <button onClick={decrement}>Decrement</button> &nbsp;&nbsp;
            <button onClick={changeName}>Change Name</button> &nbsp;&nbsp;

        </div>
    )
}
