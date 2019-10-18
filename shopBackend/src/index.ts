
import * as mongoose from 'mongoose';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as cors from 'cors';

import { ServerConstant } from './config/server';
import { ENVConfig } from './environment/index'
import { DbConnection } from './config/dbcon';
import userRouter from './routes/user.route';



const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

console.log(ENVConfig);
DbConnection.connect(ENVConfig);

app.get('/', (req, res, next) => {
    res.json("hello");
});

app.use('/user', userRouter);
app.use('/product', userRouter);

const server = http.createServer(app);
const port = process.env.PORT || 4200;
server.listen(4200);
server.on(ServerConstant.ERROR_MESSAGES.ERROR_TEXT, onError);
server.on(ServerConstant.LISTENING_TEXT, onListening);

function onError(error: NodeJS.ErrnoException ): void {
    console.log(error);

}
function onListening():void{
    const addr = server.address();
    console.log(`listening on ${port}`);
}








