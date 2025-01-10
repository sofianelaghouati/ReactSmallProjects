import React, { Component } from 'react'

class Rando extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            num: 1
        }
        this.generateNumber = this.generateNumber.bind(this);
    }
    generateNumber(){
        this.setState({num: Math.floor(Math.random()*10)+1});
    }

    render(){
        return(
            <div>
                <h1>Number is : {this.state.num}</h1>
                {this.state.num === 7 && <h2>YOU WIN !</h2>}
                <button onClick={this.generateNumber}>Random Number</button>
            </div>
        )
    }
}

export default Rando;