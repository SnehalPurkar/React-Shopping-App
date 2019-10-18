import * as mongoose from 'mongoose';


export class DbConnection {
    constructor () {}
    public static connect(env): void{
        mongoose.connect(env.DB_STRING);

    }
}
