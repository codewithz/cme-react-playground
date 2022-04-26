import React, { useState } from 'react'
import ProductComponent from './ProductComponent'

export default function ProductListComponent() {

    const productList = [
        { id: 1, name: 'Bread', quanity: 3 },
        { id: 2, name: 'Butter', quanity: 1 },
        { id: 3, name: 'Jam', quanity: 1 },
        { id: 4, name: 'Maggi', quanity: 4 },
        { id: 5, name: 'Eggs', quanity: 6 },
        { id: 6, name: 'Salt', quanity: 1 }
    ]

    const [products, setProducts] = useState(productList)



    return (
        <div>
            {
                products.map((product) =>
                    <ProductComponent />
                )
            }
            <br />

        </div>
    )
}
