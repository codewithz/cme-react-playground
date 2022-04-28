import React from 'react'

export default function ProductDetails(props) {
    const productId = props.match.params.id

    const handleSave = () => {
        // Navigating to the /products
        // props.history.push("/products")
        props.history.replace("/products")
    }
    return (
        <div>
            <h1>Product Details - {productId}</h1>
            <button className='btn btn-success btn-sm m-2'
                onClick={handleSave}
            >Save</button>
        </div>
    )
}
