import HttpException from '../exceptions/httpException';
import { NextFunction } from 'connect';


function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'something went wrong';
    // res.status(200).send({status, message});
}
