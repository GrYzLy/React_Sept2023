import React, {Component} from 'react'
import Profile from './Profile'
class FetchApi extends Component {
    constructor(){
        super()
        
        this.state = {
            data : null
        }
    }

    loadProfiles()
    {
        fetch('http://localhost:39635/Profile')
        .then(response => response.json())
        .then(data => this.setState({data: data}, () => console.log(this.state.data)))
    }
    displayProfile(data)
    {
        console.log(data)
        return(
            <div>
                <div><h2>Name: {data.name}</h2></div>
                <div><img src={data.image}></img></div>
                <div>Age: {data.age}</div>
            </div>
        )
    }
    componentDidMount()
    {
        this.loadProfiles()
    }
    render() {
        return (
            <div>
                <h1>Profile: </h1>
                {/* {this.state.data && this.state.data.map((data, index) => this.displayProfile(data))} */}
                {this.state.data && this.state.data.map((data, index) => <Profile data={data}/>)}
            </div>
        )
    }
}


export default FetchApi;

