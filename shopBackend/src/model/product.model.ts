import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { IProduct } from '../interface/user.interface';

class ProductDetails {
    static get schema() {
        const schema = new Schema({
            product_Name: {
                type: String,
                required: true
            },
            product_Price: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            updatedAt: {
                type: Date,
                default: Date.now
            }
        })
        return schema;
    }
}

const Product = mongoose.model<IProduct>('products', ProductDetails.schema);
export default Product;