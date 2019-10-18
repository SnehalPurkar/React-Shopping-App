import React, { Component } from 'react';
import axios from 'axios';

import { IState, IProps } from '../interfaces/Product.interface';


class CreateProduct extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            productName: '',
            productPrice: '',
        }
    }

    onChangeProductName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            productName: e.target.value
        })
    }

    onChangeProductPrice(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            productPrice: e.target.value
        })
    }

    onSubmit(e: any) {
        e.preventDefault();

        console.log('Form Submitted: ');

        console.log('product Name: ', this.state.productName);
        console.log('product Price: ', this.state.productPrice);

        const newProduct = {

            productName: this.state.productName,
            productPrice: this.state.productPrice
        }

        axios.post('http://localhost:4200/product/addProduct', newProduct)
            .then(res => console.log(res.data));

        this.setState({

            productName: '',
            productPrice: '',
        })
    }
    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Add your products</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Product Name: </label>
                        <input type="text" className="form-control"
                            value={this.state.productName}
                            onChange={this.onChangeProductName} />
                    </div>
                    <div className="form-group">
                        <label>Product Price: </label>
                        <input type="text" className="form-control"
                            value={this.state.productPrice}
                            onChange={this.onChangeProductPrice} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Product" className="btn btn-primary" />

                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProduct;