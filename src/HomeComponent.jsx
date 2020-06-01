import React,{ Component } from "react";
import './file.css'

class HomeComponent extends Component{
    render(){
        return(
            <div className="container">
                <div className="text-center center-block">
                <img src='./image.jpg' alt="Image" width="90%" height="90%"/> 
                    <h6>Account Management Application</h6>
                </div>
            </div>
        )
    }
}

export default HomeComponent