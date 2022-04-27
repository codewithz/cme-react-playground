import React from 'react'

export default function Posts(props) {

    const { year, month } = props.match.params
    return (
        <div>
            <h1>Posts</h1>
            <p>Year: {year}</p>
            <p>Month:{month}</p>
        </div>
    )
}
