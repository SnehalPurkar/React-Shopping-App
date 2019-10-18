import React, { Component } from 'react';
import axios from 'axios';

import { IUserProps, IUserState } from '../interfaces/User.interface';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';



class RegisterPage extends React.Component<IUserProps, IUserState> {

    constructor(props: IUserProps) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userName: '',
            emailId: '',
            passWord: ''
        }
    }

    onChangeUserName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            userName: e.target.value
        })
    }

    onChangeUserEmail(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            emailId: e.target.value
        })
    }

    onChangeUserPassword(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            passWord: e.target.value
        })
    }

    onSubmit(e: any) {
        e.preventDefault();

        console.log('Form Submitted: ');
        console.log('User Name: ', this.state.userName);
        console.log('User Email: ', this.state.emailId);
        console.log('User Password: ', this.state.passWord)

        const newUser = {
            userName: this.state.userName,
            emailId: this.state.emailId,
            passWord: this.state.passWord
        }

        axios.post('http://localhost:4002/user/add', newUser)
            .then(res => console.log(res.data));

        this.setState({
            userName: '',
            emailId: '',
            passWord: '',
        })
    }
    render() {
        return (
            <Router>
                <div style={{ marginTop: 20 }}>
                    <h3>Sign Up!</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>User Name: </label>
                            <input type="text" className="form-control"
                                value={this.state.userName}
                                onChange={this.onChangeUserName} />
                        </div>
                        <div className="form-group">
                            <label>Email: </label>
                            <input type="text" className="form-control"
                                value={this.state.emailId}
                                onChange={this.onChangeUserEmail} />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input type="password" className="form-control"
                                value={this.state.passWord}
                                onChange={this.onChangeUserPassword} />
                        </div>
                        {/* <div className="form-group">
                        <input type="submit" value="Add User" className="btn btn-primary"/>

                    </div> */}
                        <button className="navbar-item">
                            <Link to="/login" className="nav-link">Submit</Link>
                        </button>
                        <Route path="/login" component={LoginPage} />
                    </form>
                </div>
            </Router>
        )
    }
}

export default RegisterPage;