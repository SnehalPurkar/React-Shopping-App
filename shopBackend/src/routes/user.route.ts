import * as express from 'express';
import userCtrl from '../controller/user.controller';
import productCtrl from '../controller/product.controller';

let router = express.Router();

router.post('/add', userCtrl.postUserData); 
router.post('/addProduct', productCtrl.postProductData);


export default router;
