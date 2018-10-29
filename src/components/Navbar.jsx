import React, { Component } from 'react';
import {Link } from 'react-router-dom'

class Navbar extends Component {
    render(){
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm navbar-dark navbar-fixed-top">
                    <div className="container-fluid">
                        <ul class="nav navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">My Entries</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Profile</Link>
                            </li>
                        </ul>

                        <ul className="nav navbar-right navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" to="#">Sign Out</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                    
            </div>
        )
    }
}

export default Navbar;