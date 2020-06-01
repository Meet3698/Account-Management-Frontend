import React,{ Component } from "react";
import Axios from "axios";
import './file.css'

class DashboardComponent extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            account_no : "",
            history : [],
            submit : false
        }

        this.handleChange = this.handleChange.bind(this)
        this.find = this.find.bind(this)
    }
    render(){
        return(
            <div classname="container">

                <div className="container">
                <h1>User Entry</h1>
                </div>

                <div className="input-group mb-3">
                    <input type="text" name="account_no" placeholder="Search User By Account No." value={this.state.account_no} className="form-control" onChange={this.handleChange} />
                        <div className="input-group-append">
                        <button type="button" className="search-btn btn btn-success" onClick={this.find}>Search</button>
                        </div>
                </div>
                
                <div className="container">
                    {this.state.submit && 
                    <>
                        <table className="table table-responsive-sm">
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
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.history.map(history=>
                                    <tr>
                                        <td>{history.firstname}</td>
                                        <td>{history.lastname}</td>
                                        <td>{history.date}</td>
                                        <td>{history.share}</td>
                                        <td>{history.total_share}</td>
                                        <td>{history.returned_share}</td>
                                        <td>{history.loan}</td>
                                        <td>{history.emi}</td>
                                        <td>{history.total_emi}</td>
                                        <td>{history.remaining_loan}</td>
                                        <td>{history.interest}</td>
                                        <td>{history.total_interest}</td>
                                    </tr>    
                                )}
                            </tbody>
                        </table>
                    </>}
                </div>
            </div>
        )
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    find()
    {
        Axios.post('https://back-account.herokuapp.com/user/getuser',{account_no : this.state.account_no}).then((response)=>{
            
            if(response.data.length!==0)
            {
                this.setState({
                    history : response.data,
                    submit : true
                })
            }
            else{
                alert("No Entry Found")
            }
        })
    }
}

export default DashboardComponent