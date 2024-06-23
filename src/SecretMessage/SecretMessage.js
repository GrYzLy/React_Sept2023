import React, {Component} from 'react'
import Message from './Message'
class SecretMessage extends Component {
    constructor(){
        super()
        
        this.state = {
           showSecret : false
        }
    }
secretMessage() {
    return (
    <div>I'm secret message</div>
    )
}

togleSecretMessage() {
    console.log(this.state)
    this.setState({showSecret : !this.state.showSecret})
}
    
    render() {
        return (
            <div>
                <h1>SecretMessage:</h1>
                <button onClick={this.togleSecretMessage.bind(this)}>Show/Hide</button>
                {/* { this.state.showSecret ? this.secretMessage() : <div></div>} */}
                {/* {this.state.showSecret && this.secretMessage()} */}
                {this.state.showSecret && <Message />}
            </div>
        )
    }
}


export default SecretMessage;

