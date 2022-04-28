import React, { useState, useEffect } from 'react'

export default function Counter() {

    const [name, setName] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        //execute when component is mounted and updated
        document.title = `${name} have clicked for ${count} times `

        //execution when component unmounts 

        return () => {
            //here we write the code when component unmounts
            console.log("Clean Up")
        }
    })

    const handleInput = (event) => {
        setName(event.target.value)
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const resetState = () => {
        setName("")
        setCount(0)

    }


    return (
        <div>
            <input type="text" placeholder='Add name' onChange={handleInput} />
            <div>
                {name} have clicked for {count} times
            </div>
            <br />
            <button className='btn btn-primary' onClick={handleIncrement}>Increment</button>
            &nbsp;
            <button className='btn btn-info' onClick={resetState}>Reset</button>
        </div>
    )
}
