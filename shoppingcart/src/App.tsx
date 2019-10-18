import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsList from './components/ProductsList';
import EditProduct from './components/EditProduct';
import CreateProduct from './components/CreateProduct';
import shopLogo from './shopLogo.png';
import LoginPage from './components/LoginPage';
import { createBrowserHistory } from 'history';
import RegisterPage from './components/RegisterPage';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={shopLogo} width="100" height="100" alt="shop" />
          </nav>
          <Route path="/" exact component={RegisterPage} />
        </div>
      </Router>

    );
  }

}

export default App;
