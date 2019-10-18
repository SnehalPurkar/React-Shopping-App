import React, { Component } from 'react';
// import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import Dashboard from './Dashboard';
class LoginPage extends Component {
    render() {
        return (
            <Router>
                <div style={{ flex: 1, flexDirection: "column" }}>
                    <form>
                        <div><input type="text" name="fname" placeholder="Username" /> </div> <br></br>
                        <div><input type="text" name="lname" placeholder="Password" /></div><br></br>
                        <button className="navbar-item">
                            <Link to="/dashboard" className="nav-link">Submit</Link>

                        </button>
                        <Route path="/dashboard" component={Dashboard} />
                    </form>
                </div>
            </Router>
        )
    }
}

export default LoginPage;