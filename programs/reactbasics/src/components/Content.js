import React from 'react'
const Content = () => {
    const course = "React.js"
    const product ={
        code:1,
        name:"laptop",
        supplier:"Lenovo",
        price:75000
    }
  return (
    <div>
       <h1>{course}</h1>
       <p>Code : {product.code} Name : {product.name} Supplier : {product.supplier} Price : {product.price}</p>
    </div>
  )
}
export default Content