import React,{useState,useEffect} from 'react'

const Product = () => {

    const [code,setCode]=useState(0)
    const [name,setName]=useState('')
    const [supplier,setSupplier]=useState('')
    const [price,setPrice]=useState('')
    const [products,setProducts]=useState([])

    const addProduct=(e)=>{
        e.preventDefault()
        let product ={code,name,supplier,price}

        // back end api to save the data
        // fetch the data from the back end api
        console.log("product",product)
        let updproduct=[...products,product]
        console.log("updated product list ",updproduct)
        setProducts([...products,product])
        console.log("product list")
        console.log(products)
        clearProduct()
    }

    const clearProduct=()=>{
        setCode(0)
        setName('')
        setSupplier('')
        setPrice('')
    }
    /**
    useEffect(() => {
        console.log("use effect")

        console.log(products);

      }, [products]);

       */
      /**
      console.log("use effect with a function as a parameter")
      useEffect(()=>{
        console.log("use effect")
      })
      **/
      //console.log("use effect with a function as a parameter")
      /**
      useEffect(()=>{
        console.log("use effect only once")
      },[])
 */
      useEffect(() => {
        console.log("use effect")

        console.log(products);

      }, [products]);

      const deleteProduct = (code)=>{
        let afterdelete = products.filter((product)=>product.code!=code)
        setProducts(afterdelete)
      }

      const updateProduct = (product)=>{
        //let prodtoupate = products.filter((product)=>product.code!=code)
        //setProducts(afterdelete)
      }

      const listproducts = products.map((product)=><tr key={product.code}>

                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.supplier}</td>
                <td>{product.price}</td>
                <td><button onClick={()=>deleteProduct(product.code)}>Delete</button></td>
                <td><button onClick={()=>updateProduct(product)}>Update</button></td>
      </tr>)
  return (
    <div className='divcls'>
        <div>
            <form onSubmit={addProduct}>
            <h1>Product Master</h1>
            <label>Code</label><input type="number" value={code} onChange={(e)=>setCode(e.target.value)}/><br/>
            <label>Name</label><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            <label>Supplier</label><input type="text" value={supplier} onChange={(e)=>setSupplier(e.target.value)}/><br/>
            <label>Price</label><input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/><br/>
           <button type="submit">Add Product</button>
           </form>
        </div>
        <div className='divcls'>
        <table>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Supplier</th>
                <th>Price</th>
            </tr>
            {listproducts}
        </table>
        </div>
    </div>
  )
}

export default Product