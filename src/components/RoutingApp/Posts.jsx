import React from 'react'
import queryString from 'query-string'

export default function Posts(props) {

    const { year, month } = props.match.params
    const { location } = props

    const result = queryString.parse(location.search)
    console.log(JSON.stringify(result))
    return (
        <div>
            <h1>Posts</h1>
            <p>Year: {year}</p>
            <p>Month:{month}</p>
        </div>
    )
}
