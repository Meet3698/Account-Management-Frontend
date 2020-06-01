import React, { Component } from 'react';
import './App.css';
import './bootstrap.css'
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import DashboardComponent from './DashboardComponent'
import LoginComponent from './LoginComponent'
import HomeComponent from './HomeComponent'
import RegisterComponent from './RegisterComponent'
import AdminComponent from './AdminComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import ResetPasswordComponent from './ResetPasswordComponent'
import ClilentComponent from './ClilentComponent'
import DetailsComponent from './DetailsComponent'

class App extends Component{
    render(){
        return (
            <div>
                <Router>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={HomeComponent}/>
                            <AuthenticatedRoute path="/dashboard" component={DashboardComponent}/>
                            <Route path="/register" component={RegisterComponent}/>
                            <AuthenticatedRoute path="/admin" component={AdminComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/resetpassword/:token" component={ResetPasswordComponent}/>
                            <AuthenticatedRoute path="/client" component={ClilentComponent}/>
                            <AuthenticatedRoute path="/details" component={DetailsComponent}/>
                            <Route component={HomeComponent}/>
                        </Switch>
                </Router>
            </div>
        );
    }
}

export default App;