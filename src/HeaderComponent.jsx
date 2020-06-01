import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.css'
import './file.css'
import AuthenticationService from './AuthenticationService';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand>Account Management</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/register">Register/Login</Link>
                            <Link className="nav-link" to="/login" onClick={AuthenticationService.removeSession}>Logout</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="topnav">
                        <span className="navbar-brand navbar-collapse">Account Management</span>
                        <ul className="navbar-nav">
                            <li><Link className="nav-link" to="/">Home</Link></li>
                            <li><Link className="nav-link" to="/register">Register/Login</Link></li>
                            <li><Link className="nav-link" to="/login" onClick={AuthenticationService.removeSession}>Logout</Link></li>
                        </ul>
                    </div>
                </nav> */}
            </header >
        )
    }
}

export default HeaderComponent