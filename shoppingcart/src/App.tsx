import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import shopLogo from './shopLogo.png';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { isloginObject } from './services/IsloggedIn.service';
import Dashboard from './components/Dashboard';


class App extends Component<{}, { isloggedIn: boolean }> {

  public isloggedin: boolean = false;
  constructor(props: any) {
    super(props);
    this.state = {
      isloggedIn: false
    }
    isloginObject.isloggedin.subscribe((isloggedIn: boolean) => {
      console.log(isloggedIn);
      this.setState({ isloggedIn: isloggedIn })
    });
  }
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={shopLogo} width="100" height="100" alt="shop" />

            {(!this.state.isloggedIn) ? <div>
              <Link to="/">Register</Link>
              <Link to="/login">Login</Link></div> : null}
            {
              (this.state.isloggedIn) ?
                <Link to="/dashboard">Dashboard</Link> : null}
          </nav>
          <switch>
            <Route path="/" exact component={RegisterPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/dashboard" exact component={Dashboard} />
          </switch>
        </div>
      </Router>
    );
  }

}

export default App;
