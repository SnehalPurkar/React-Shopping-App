import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    user_Name?: String,
    email_Id?: String,
    password?: String,
    createdAt?: Date,
    updatedAt?: Date
}

export interface IProduct extends mongoose.Document {
    product_Name?: String,
    product_Price?: String,
    createdAt?: Date,
    updatedAt?: Date
}



