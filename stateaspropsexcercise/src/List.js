import React, { Component } from 'react'
import Item from './Item'
import './List.css'


class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            nums: [1, 2, 3, 4, 5, 6]
        }
    this.remove = this.remove.bind(this)
    }

    remove(num){
        this.setState(st =>({
            nums: st.nums.filter(n => n!== num)
        }))
    }

    render(){
        let nums = this.state.nums.map((num)=>
            <Item key = {num} value ={num} remove={this.remove}/>
        )
        return (
            <div className='List'>
                <h1>Better number list</h1>
                <ul>{nums}</ul>
            </div>
        )


    }
}

export default List