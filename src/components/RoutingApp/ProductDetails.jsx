import React from 'react'

export default function ProductDetails(props) {
    const productId = props.match.params.id
    return (
        <div>
            <h1>Product Details - {productId}</h1>
            <button className='btn btn-success btn-sm m-2'>Save</button>
        </div>
    )
}
