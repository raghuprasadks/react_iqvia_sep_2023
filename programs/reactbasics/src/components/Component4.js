import React from 'react'
import Component5 from './Component5'

const Component4 = ({user}) => {
  return (
    <div>
        <h1>Component4</h1>
        <Component5 user={user}></Component5>

    </div>
    
  )
}

export default Component4