import React, { Component } from "react";
import './file.css'
import { Link } from "react-router-dom";
import axios from "axios"
class RegisterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstname : "",
            lastname : "",
            email : "",
            password : "",
            phone : "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.register = this.register.bind(this)
    }
    
    render() {
        return (
            <div className="container">
                <div><h1>Register</h1></div>
                <div className="text-center">
                    <input type="email" name="email" placeholder="Email" value={this.state.username} onChange={this.handleChange}/><br/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/><br/>
                    <input type="text" name="phone" placeholder="Contact" value={this.state.phone} onChange={this.handleChange}/><br/>
                    <button type="button" className="btn btn-success" onClick={this.register}>Register</button><br/>
                    <div><h6>Already User? <Link to="/login">Login</Link></h6></div>
                </div>
            </div>
        )
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    register(){

        if(this.state.email==="")
        {
            alert("Email must be filled")
        }
        else if(this.state.password==="")
        {
            alert("Password must be filled")
        }
        else if(this.state.phone==="")
        {
            alert("Contact must be filled")
        }
        else
        {
            axios.post("https://back-account.herokuapp.com/register",this.state).then((response)=>{
                if(response.data==="Success")
                {
                    alert("Registered Successfully")
                    this.props.history.push("/login")
                }
                else
                {
                    alert(response.data + " is already Registered")
                }
            })
        }
    }
}

export default RegisterComponent