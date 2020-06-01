import React, { Component } from "react";
import './file.css'
import './bootstrap.css'
import Axios from "axios";

class AdminComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account_no: "",
            firstname: "",
            lastname: "",
            school : "",
            date: "",
            share: 0,
            total_share: 0,
            returned_share: 0,
            loan: 0,
            emi: 0,
            total_emi: 0,
            remaining_loan: 0,
            interest: 0,
            total_interest: 0,
            submit: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.save = this.save.bind(this)
        this.search = this.search.bind(this)
        this.add = this.add.bind(this)
        this.edit = this.edit.bind(this)
        this.show = this.show.bind(this)
        this.shcool = this.shcool.bind(this)
        this.delete = this.delete.bind(this)
        this.deleteuser = this.deleteuser.bind(this)
    }
    render() {
        return (
            <div className="container">
                <div className="container"><h1>Administrator</h1></div>

                    <div className="input-group mb-3">
                    <input type="text" name="account_no" placeholder="Search User By Account No." value={this.state.account_no} className="form-control" onChange={this.handleChange} />
                        <div className="input-group-append">
                        <button type="button" className="search-btn btn btn-success" onClick={this.search}>Search</button>
                        </div>
                    </div>

                    <div className="container">
                        <button className="add-btn btn btn-success col-sm" onClick={this.add}>Add User</button>
                        <button className="add-btn btn btn-success col-sm" onClick={this.edit}>Edit User</button>
                        <button className="show-btn btn btn-success col-sm" onClick={this.show}>List All</button>
                        <button className="add-btn btn btn-success col-sm" onClick={this.deleteuser}>Delete User</button>
                        {/* <button className="add-btn btn btn-success col-sm" onClick={this.shcool}>School Wise Collection</button> */}
                    </div>

                <div className="container">
                {this.state.submit &&
                    <>
                        <h1>Account No. {this.state.account_no}</h1>
                        <div className="table-responsive">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Date</th>
                                    <th>Share</th>
                                    <th>Total Share</th>
                                    <th>Returned Share</th>
                                    <th>Loan</th>
                                    <th>EMI</th>
                                    <th>Total EMI</th>
                                    <th>Remaining Loan</th>
                                    <th>Interest</th>
                                    <th>Total Interest</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    <tr>
                                        <td>{this.state.firstname}</td>
                                        <td>{this.state.lastname}</td>
                                        <td><input type="text" name="date" placeholder="DD/MM/YYYY" value={this.state.date} className="date" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="share" value={this.state.share} className="date" onChange={this.handleChange} /></td>
                                        <td>{this.state.total_share}</td>
                                        <td><input type="number" name="returned_share" value={this.state.returned_share} className="date" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="loan" value={this.state.loan} className="date" onChange={this.handleChange} /></td>
                                        <td><input type="number" name="emi" value={this.state.emi} className="date" onChange={this.handleChange} /></td>
                                        <td>{this.state.total_emi}</td>
                                        <td>{this.state.remaining_loan}</td>
                                        <td><input type="number" name="interest" value={this.state.interest} className="date" onChange={this.handleChange} /></td>
                                        <td>{this.state.total_interest}</td>
                                        <td><button className="btn btn-success" onClick={this.delete}>Delete</button></td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                        </div>
                        <div className="save" onClick={this.save}><button className="btn btn-success">Save</button></div>
                    </>}
                </div>

            </div>
        )
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    search() {
        Axios.post("https://back-account.herokuapp.com/user/getclient", { account_no: this.state.account_no }).then((response) => {
            if (response.data[0] === undefined) {
                alert("User not found")
            }
            else {
                this.setState({
                    account_no: response.data[0].account_no,
                    firstname: response.data[0].firstname,
                    lastname: response.data[0].lastname,
                    school : response.data[0].school,
                    date: response.data[0].date,
                    share: response.data[0].share,
                    total_share: response.data[0].total_share,
                    returned_share: response.data[0].returned_share,
                    loan: response.data[0].loan,
                    emi: response.data[0].emi,
                    total_emi: response.data[0].total_emi,
                    remaining_loan: response.data[0].remaining_loan,
                    interest: response.data[0].interest,
                    total_interest: response.data[0].total_interest,
                    submit: true
                })
            }
        })
    }

    save() {
        Axios.post("https://back-account.herokuapp.com/user/updateclient", this.state).then((response) => {

            if (response.data != null) {
                alert("Updated Successfully!")
                this.setState({
                    submit: false
                })
            }
        })
    }

    add() {
        this.props.history.push({
            pathname: '/client',
            add : true,
        })
    }

    edit() {
        this.props.history.push({
            pathname: '/client',
            edit : true,
        })
    }

    deleteuser() {
        this.props.history.push({
            pathname: '/client',
            delete : true,
        })
    }

    show() {
        Axios.get("https://back-account.herokuapp.com/user/getallclient").then((response) => {
            if (response.data.length !== 0) {
                this.props.history.push({
                    pathname : "/details",
                    show : true,
                    clients : response.data
                })
            }
            else {
                alert("No Entry Found")
            }
        })
    }

    shcool(){
        // this.props.history.push({
        //     pathname : "details",
        //     // data : response.data
        // })
        Axios.post("https://back-account.herokuapp.com/user/schooltotal").then((response)=>{
            if(response.data === "No Record Found")
            {
                alert(response.data)
            }
            else{
                this.props.history.push({
                pathname : "details",
                school : true,
                data : response.data
            })
            }
        })
    }

    delete(){
        Axios.post("https://back-account.herokuapp.com/user/deleteentry",this.state).then((response)=>{
            if(response.data==="Success"){
                alert("Entry Deleted")
                this.setState({
                    submit : false
                })
            }
        })
    }
}

export default AdminComponent