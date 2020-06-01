import React, { Component } from "react";
import './file.css'
import axios from 'axios'
import './AuthenticationService'
import AuthenticationService from "./AuthenticationService";
import { Link } from "react-router-dom";

class LoginComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            email : "",
            password : "",
            submit : true,
            forgot : false
        }

        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this)
        this.forgot = this.forgot.bind(this)
        this.reset = this.reset.bind(this)
    }
    
    render() {
        return (
            <div className="container">
                {this.state.submit &&
                <>
                    <div><h1>Login</h1></div>
                    <div className="text-center">
                        <input type="text" name="email" placeholder="Email" value={this.state.username} onChange={this.handleChange}/><br/>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/><br/>
                        <Link onClick={this.forgot}>Forgot Password?</Link><br/>
                        <button type="button" className="btn btn-success" onClick={this.login}>Login</button>
                    </div>
                </>
                }
                {this.state.forgot &&
                <>
                    <div className="text-center">
                        <div><h1>Reset Password</h1></div>
                        <input type="text" name="email" placeholder="Enter Your Email" value={this.state.email} onChange={this.handleChange}/><br/>
                        <button type="button" className="btn btn-success" onClick={this.reset}>Send reset link</button>
                    </div>
                </>}
            </div>
        )
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    login(){
        axios.post("https://back-account.herokuapp.com/login",this.state).then((response)=>{
            if(response.data==="Success")
            { 
                AuthenticationService.setSession(this.state.email)
                this.props.history.push("/dashboard")
            }
            else if(response.data==="Admin")
            {
                AuthenticationService.setSession(this.state.email)
                this.props.history.push("/admin")
            }
            else
            {
                alert(response.data)
            }
        })
    }

    forgot(){
        this.setState({
            submit : false,
            forgot : true
        })
    }

    reset(){
        if(this.state.email==="")
        {
            alert("Enter Email")
        }
        else{
            axios.post("https://back-account.herokuapp.com/user/resetpassword",{email : this.state.email}).then((response)=>{
            if(response.data==="Sent")
            {
                alert("Reset password link is sent to your email")
                this.setState({
                    submit : true,
                    forgot : false
                })
            }
        })
        }
    }
}

export default LoginComponent