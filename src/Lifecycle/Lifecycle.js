import React, {Component} from 'react'

class Lifecycle extends Component {
    constructor(){
        super()
        
        this.title = "Pierwszy tytul"
        this.state = {
            cycle : 0
        }

        console.log("Constructor")
        console.log("Cycle: " + this.state.cycle)
    }

    componentDidMount() {
        console.log("Coponent did mount!")
        this.title = "Nowy tytul"
        setInterval(
            () => this.setState({cycle: this.state.cycle + 1}),
            10000
        )

        console.log(this.title)

    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update!")
        console.log("Cycle: " + this.state.cycle)

        console.log("prevProp: ", prevProps)
        console.log("prevState: ", prevState)

    }
    render() {
        console.log("Render!")
        return (
            <div>
                <h1>Lifecycle: { this.state.cycle}</h1>
                <h2>{this.title}</h2>
               
            </div>
        )
    }
}


export default Lifecycle;

