import React,{ Component } from "react";
import Axios from "axios"

class ResetPasswordComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            token : this.props.match.params.token,
            email : "",
            password : "",
            confirm : "",
            bool : false
        }

        this.handleChange = this.handleChange.bind(this)
        this.set = this.set.bind(this)
    }

    async componentDidMount(){
        console.log("Authentication started");
        Axios.post("https://back-account.herokuapp.com/user/reset",{token:this.state.token}).then((response)=>{
            if(response.data==="fail")
            {
                alert("Password reset link is invalid")
                this.props.history.push("/login")
            }
            else
            {
                this.setState({
                    bool : true,
                    email : response.data
                })
            }
        })
    }

    render(){
        return(
            <div>
                {this.state.bool &&
                    <>
                        <div className="container text-center">
                            <div><h1>Reset Password</h1></div>
                            <input type="password" name="password" placeholder="New Password" value={this.state.password} onChange={this.handleChange}/><br/>
                            <input type="password" name="confirm" placeholder="Confirm Password" value={this.state.confirm} onChange={this.handleChange}/><br/>
                            <button type="button" className="btn btn-success" onClick={this.set}>Change</button>
                        </div>
                    </>
                }
            </div>
        )
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    set(){
        if(this.state.password!==this.state.confirm)
        {
            alert("Password doesn't match")
        }
        else
        {
            Axios.post("https://back-account.herokuapp.com/user/updatepassword",this.state).then((response)=>{
                if(response.data==="password updated")
                {
                    alert("Password Updated Successfully")
                    this.props.history.push("/login")
                }
            })
        }
    }
}

export default ResetPasswordComponent