import React, {Component} from 'react'

class LoginForm extends Component {
    constructor(){
        super()
        
        this.state = {
            username : "",
            password : "",
            passwordConfirmation : "",
            email : "",
            errors : []
        }

        this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this)
    }

    submitForm()
    {
        console.log("Submit!")

    }

    validateNotEmpty(field, value)
    {
        if(value.length <= 0)
        {
            return `${field} must be filled out!`
        }
    }
    validateUsernameOnBlur(event)
    {
        console.log(this)
        const username = event.target.value
        const errors = this.state.errors

        var validate_result =  this.validateNotEmpty("Username", username)

        if(validate_result)
        {
            this.setState({username : ""})
            errors.push(validate_result)
        }

        this.setState({username, errors})
    }

    validatePasswordOnBlur(event)
    {
        const password = event.target.value
        const errors = this.state.errors

        var validate_result = this.validateNotEmpty("Password", password)
        
        if(validate_result)
        {
            this.setState({password : ""})
            errors.push(validate_result)
        }

        this.setState({password, errors})
    }

    validatePasswordConfirmationOnBlur(event)
    {
        console.log("validatePasswordConfirmationOnBlur")
        const passwordConfirmation = event.target.value
        const errors = this.state.errors

        if(passwordConfirmation !== this.state.password)
        {
            console.log("Not")
            errors.push("Password must match!")
        }

        this.setState({passwordConfirmation, errors})
    }

    displayErrors()
    {
        return (
            <div>
                {this.state.errors.map((err, i) => <p key={i}>{err}</p>)}
            </div>
        )
    }

    displayForm()
    {
        
        return (
            <div>
                <h1>LoginForm2</h1>
                Username : <input id="username" type="text" onBlur={this.validateUsernameOnBlur.bind(this)}/><br />
                Password : <input type="text" onBlur={this.validatePasswordOnBlur}/><br />
                Password confirmation : <input type="text" onBlur={this.validatePasswordConfirmationOnBlur.bind(this)}/><br />
                Email : <input type="text" /><br/>
                <button onClick={this.submitForm}>Submit</button>
                <br/>
                {this.displayErrors()}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.displayForm()}
            </div>
        )
    }
}


export default LoginForm;

