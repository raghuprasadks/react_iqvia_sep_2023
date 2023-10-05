import React from 'react'

const Employees = (props) => {

    const empdata = props.data
  return (
    <div>
        <h1>Number of employees {empdata.length}</h1>
    </div>
  )
}

export default Employees