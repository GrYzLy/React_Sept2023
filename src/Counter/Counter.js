import React, {Component} from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.localCounter = 0
        this.state = {
            clickCounter : 0
        }
    }

    incrementCounter()
    {
        console.log("incrementCounter")
        
        this.setState({clickCounter : this.state.clickCounter + 1})

    }
    render() {
        return (
            <div>
                <h1>Counter: { this.state.clickCounter}</h1>
                <button onClick={() => this.incrementCounter()}>Increment counter!</button>
            </div>
        )
    }
}


export default Counter;

