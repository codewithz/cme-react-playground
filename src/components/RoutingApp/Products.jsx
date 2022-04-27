import React,{useState} from 'react'

export default function Products() {

    const productList=[
        {id:1,name:'Product 1'},
        {id:2,name:'Product 2'},
        {id:3,name:'Product 3'},
        {id:4,name:'Product 4'},
    ]

    const [products,setProducts]=useState(productList);

  return (
    <div>
        <h1>Products</h1>
        <ul>
            {products.map((product)=>(
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    </div>

    
  )
}
