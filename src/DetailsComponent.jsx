import React,{ Component } from "react";

class DetailsComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            sum : 0
        }
    }
    render(){
        return(
            <div>
                <div>
                    {this.props.location.show &&
                        <>
                            <div className="text-center"><h3>Last Entries Of All Users</h3></div>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.location.clients.map(clients =>
                                        <tr key={clients.account_no}>
                                            <td>{clients.firstname}</td>
                                            <td>{clients.lastname}</td>
                                            <td>{clients.date}</td>
                                            <td>{clients.share}</td>
                                            <td>{clients.total_share}</td>
                                            <td>{clients.returned_share}</td>
                                            <td>{clients.loan}</td>
                                            <td>{clients.emi}</td>
                                            <td>{clients.total_emi}</td>
                                            <td>{clients.remaining_loan}</td>
                                            <td>{clients.interest}</td>
                                            <td>{clients.total_interest}</td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                            </div>
                        </>
                    }
                </div>

                <div>
                    {this.props.location.school &&
                        <>
                            <div className="text-center"><h3>School Wise Collection</h3></div>
                            <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>School</th>
                                        <th>Total Share</th>
                                        <th>Total EMI</th>
                                        <th>Total Interest</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.location.data.map(data =>
                                        <tr key={data.school}>
                                            <td>{data.school}</td>
                                            <td>{data.total_share}</td>
                                            <td>{data.total_emi}</td>
                                            <td>{data.total_interest}</td>
                                            <td>{data.total}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </>
                }
            </div>
        </div>
        )
    }
}

export default DetailsComponent