import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsList from './ProductsList';
import CreateProduct from './CreateProduct';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div>
                                <ul className="navbar-nav mr-auto">
                                    <li className="navbar-item">
                                        <Link to="/create" className="nav-link">Buy Product</Link>
                                    </li>
                                    <li className="navbar-item">
                                        <Link to="/getProduct" className="nav-link">Products Added</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <Route path="/getProduct" component={ProductsList} />
                        <Route path="/create" component={CreateProduct} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default Dashboard;