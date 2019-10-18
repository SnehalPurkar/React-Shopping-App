import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IState, IProps } from '../interfaces/Product.interface';


class ProductsList extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            // productId: 0,
            productName: '',
            productPrice: '',
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4002/productlist/')
            .then(res => {
                this.setState({
                    productName: res.data.productName,
                    productPrice: res.data.productPrice,
                })
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <h3>Products list</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* { this.productList()} */}
                        <td>{this.state.productName}</td>
                        <td>{this.state.productPrice}</td>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductsList;