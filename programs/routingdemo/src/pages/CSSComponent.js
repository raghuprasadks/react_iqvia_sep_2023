import React from 'react'
import stylecss from '../css/mystyle.module.css'

const CSSComponent = () => {

    const divstl={
        border:'1px solid brown',
        height:'200px',
        width:'50%',
        display:'inline-block',
        margin:'auto',
        textAlign:'center'
    }
  return (
    <>
    <div style={divstl}>        
        <h1 style={{color:'blue',textAlign:'center'}}>In-line css styling</h1>  
    </div>

    <div className='prod'>
        <h1>Name : Product 1</h1>
        <h1>Desc : Product 1 desc</h1>
        <h1>Price : 1000</h1>
    </div>
    <p className={stylecss.align}>Styled with module.css</p>
    </>
  )
}

export default CSSComponent