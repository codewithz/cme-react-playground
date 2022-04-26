import React from 'react'

export default function ProductComponent() {
    return (
        <div>
            <h4>Product Name</h4>
            <button className='btn btn-secondary btn-sm m-2'>
                +
            </button>
            <span className="badge m-2 badge-warning">2</span>
            <button className='btn btn-info btn-sm m-2'>
                -
            </button>
        </div >
    )
}
