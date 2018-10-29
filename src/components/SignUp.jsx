import React, { Component } from 'react';
import swal from 'sweetalert';
import { Redirect, Link } from 'react-router-dom';

import api from '../common/api'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: null,
            email: null,
            password: null,
            confirm_password: null,
            redirect: false  
        }
    }

    handleChange = (event) =>{
        event.preventDefault()
        this.setState({[event.currentTarget.name]: event.currentTarget.value})
    }

    passwordValidator(password, confirm_password){
        if (typeof password === "string"){
            if (password === confirm_password && password.length >= 8){
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password, email, confirm_password } = this.state

        if(this.passwordValidator(password, confirm_password)){
            swal('Lets do this')
            const data = {
                username: username,
                email: email,
                password: password
            }
            const url = '/user/signup/'
            console.log(data)
            api.post(url, data)
            .then(response => response.json())
            .then(response=>{
                swal(response.message)
                if(response.message === "Successfully registered") {
                    alert('its going down')
                    this.setState({redirect: true})
                }
            })

        } else {
            swal('Oops, Provide a valid password. >6 chars and ')
        }
    }

    render(){
        const { redirect } = this.state;
        if(redirect){
            return <Redirect to='/login'/>
        }
        return(
            <div className="input-form">
                <h2 className="title">Sign Up</h2>
                <form>
                    <div className="form-group row">
                        <label className="label col-md-2">Username: </label>
                        <input type="text" placeholder="Enter username here..." name="username" onChange={this.handleChange} className="form-control col-md-6"required/>
                    </div>

                    <div className="form-group row">
                        <label className="label col-md-2">Email: </label>
                        <input type="email" placeholder="janedoe@example.com" name="email" onChange={this.handleChange} className="form-control col-md-6" required/>
                    </div>
    
                    <div className="form-group row">
                        <label className="label col-md-2">Password: </label>
                        <input type="password" name="password" onChange={this.handleChange} className="form-control col-md-6" required/>
                    </div>

                    <div className="form-group row">
                        <label className="label col-md-2">Confirm Password: </label>
                        <input type="password" name="confirm_password" onChange={this.handleChange} className="form-control col-md-6" required/>
                    </div>
                    
                    <input type="submit" className="btn btn-primary center" onClick={this.handleSubmit} />
                    <div className="info-box">
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
