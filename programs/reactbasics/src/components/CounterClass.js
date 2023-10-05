import React from "react";

class CounterClass extends React.Component{

    constructor(){
        super()
        this.state={
            color:"blue"        
        }
    }

    changeColor=()=>{
        this.setState({color: "yellow"})
    }
    render(){
        return( 
        <div>
            <h1>Class Component</h1>
            <h1>Color : {this.state.color}</h1>
            <button onClick={this.changeColor}>Change Color</button>
        </div>
            
        )
        }
}

export default CounterClass