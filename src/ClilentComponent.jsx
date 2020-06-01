import React,{ Component } from "react";
import Axios from "axios";

class ClientComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            account_no: "",
            firstname : "",
            lastname : "",
            school : ""
        }

        this.create = this.create.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.edit = this.edit.bind(this)
        this.delete = this.delete.bind(this)
    }

    render(){
        return(
            <div>
                {this.props.location.add &&
                    <>
                        <div className="container">
                            <div><h1>Enter User Details</h1></div>
                            <div className="add-container">
                            <input type="text" name="account_no" placeholder="Account No." value={this.state.account_no} onChange={this.handleChange} /><br />
                            <input type="text" name="firstname" placeholder="Firstname" value={this.state.firstname} onChange={this.handleChange} /><br />
                            <input type="text" name="lastname" placeholder="Lastname" value={this.state.lastname} onChange={this.handleChange} /><br />
                            <input type="text" name="school" placeholder="School" value={this.state.school} onChange={this.handleChange} /><br />
                            <button className="btn btn-success" onClick={this.create}>Add</button>
                            </div>
                        </div>
                    </>
                }

                {this.props.location.edit &&
                    <>
                        <div className="container">
                            <div><h1>Edit User Details</h1></div>
                            <div className="add-container">
                            <input type="text" name="account_no" placeholder="Account No." value={this.state.account_no} onChange={this.handleChange} /><br />
                            <input type="text" name="firstname" placeholder="Firstname" value={this.state.firstname} onChange={this.handleChange} /><br />
                            <input type="text" name="lastname" placeholder="Lastname" value={this.state.lastname} onChange={this.handleChange} /><br />
                            <input type="text" name="school" placeholder="School" value={this.state.school} onChange={this.handleChange} /><br />
                            <button className="btn btn-success" onClick={this.edit}>Edit</button>
                            </div>
                        </div>
                    </>
                }

                {this.props.location.delete &&
                    <>
                        <div className="container">
                            <div><h1>Enter Account Number</h1></div>
                            <div className="add-container">
                            <input type="text" name="account_no" placeholder="Account No." value={this.state.account_no} onChange={this.handleChange} /><br />
                            <button className="btn btn-success" onClick={this.delete}>Delete</button>
                            </div>
                        </div>
                    </>
                }

            </div>
        )
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    create() {
        if (this.state.account_no === "") {
            alert("Enter Acoount No.")
        }
        else if (this.state.firstname === "") {
            alert("Enter Firstname")
        }
        else if (this.state.lastname === "") {
            alert("Enter Lastname")
        }
        else if (this.state.school === "") {
            alert("Enter School Name")
        }
        else {
            Axios.post("https://back-account.herokuapp.com/user/addclient", this.state).then((response) => {
                if (response.data === "Success") {
                    alert("Added Successfully!")
                    this.props.history.push("/admin")
                }
                else {
                    alert("Account Number is Taken")
                }
            })
        }
    }

    edit() {
        if (this.state.account_no === "") {
            alert("Enter Acoount No.")
        }
        else
        {
            Axios.post("https://back-account.herokuapp.com/user/editclient",this.state).then((response)=>{

                if (response.data === "Success") {
                    alert("Updated Successfully!")
                    this.props.history.push("/admin")
                }
                else if(response.data === "fail")
                {
                    alert("Enter Valid Details")
                }
                else
                {
                    alert("User Not Found")
                }
            })
        }
    }

    delete(){
        Axios.post("https://back-account.herokuapp.com/user/deleteuser",{account_no:this.state.account_no}).then((response)=>{
            if(response.data === "Success"){
                alert("Deleted Successfully")
                this.props.history.push("/admin")
            }
        })
    }
}

export default ClientComponent