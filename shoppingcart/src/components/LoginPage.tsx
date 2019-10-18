import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import { isloginObject } from '../services/IsloggedIn.service';


class LoginPage extends Component<{ history: any }, {}> {
    constructor(props: any) {
        super(props);

    }

    onSubmit(e: any) {
        isloginObject.isloggedin.next(true);
        this.props.history.push('/home')
    }
    render() {
        return (
            <Router>
                <div style={{ flex: 1, flexDirection: "column" }}>
                    <form>
                        <div><input type="text" name="fname" placeholder="Username" /> </div> <br></br>
                        <div><input type="text" name="lname" placeholder="Password" /></div><br></br>
                        <button className="navbar-item" onClick={() => { this.onSubmit('e') }}>
                            Submit
                        </button>
                        <Route path="/dashboard" component={Dashboard} />
                    </form>
                </div>
            </Router>
        )
    }
}

export default LoginPage;