import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { IUser } from '../interface/user.interface';

class UserDetails {
    static get schema() {
        const schema = new Schema({
            user_Name: {
                type: String,
                required: true
            },
            email_Id: {
                type: String,
                required: true
            },
            password: {
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

const User = mongoose.model<IUser>('users', UserDetails.schema);
export default User;