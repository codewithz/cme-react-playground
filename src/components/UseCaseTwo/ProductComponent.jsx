import React, { useState } from 'react'

export default function ProductComponent(props) {

    // const [name, setName] = useState(props.name)
    // const [quantity, setQuantity] = useState(props.quantity)
    // const [productId, setProductId] = useState(props.id)

    const { product } = props

    const styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    const formatQuantity = () => product.quantity === 0 ? 'Zero' : product.quantity

    // const handleIncrement = () => {
    //     setQuantity(quantity + 1)
    // }

    // const handleDecrement = () => {
    //     if (quantity >= 1) {
    //         setQuantity(quantity - 1)
    //     }
    // }

    // const handleIncrement = () => {
    //     props.onIncrement(product)
    // }

    const getBadgeClasses = () => {
        let classes = "badge m-2 badge-"
        classes += (product.quantity === 0) ? "warning" : "primary"
        return classes
    }
    return (
        <div>
            <h4>{product.name}</h4>
            <button className='btn btn-secondary btn-sm m-2'
                onClick={() => props.onIncrement(product)}
            >
                +
            </button>
            <span style={styles} className={getBadgeClasses()}>
                {formatQuantity()}
            </span>
            <button className='btn btn-info btn-sm m-2'
                onClick={() => props.onDecrement(product)}
            >
                -
            </button>
            <button className='btn btn-danger btn-sm m-2'
                onClick={() => props.removeFromCart(product.id)}
            >
                Remove from Cart
            </button>
        </div >
    )
}
