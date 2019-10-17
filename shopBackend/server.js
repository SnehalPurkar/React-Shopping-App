const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(4002);


// const express = require('express');
// const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = express.Router();
// const PORT = 4002;

let Products = require('./product.model');
let UserDetails = require('./user.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/productlist', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log('MongoDB database connected!');
})

productRoutes.route('/').get(function(req, res){
    Products.find(function(err, items) {
        if(err) {
            console.log(err);
        } else {
            res.json(items);
        }   
    });
});

app.get('./:id', function (req, res) {
    let id = req.params.id;
    Products.findById(id, function(err, item){
        res.json(item);
    });
})

app.post('/productlist/add', function (req, res) {
    console.log("done++++++++",req.body);
    let product = new Products({product_Id: req.body.productId, product_Name: req.body.productName, product_Price: req.body.productPrice });
    console.log("post data body : ", product);
    product.save()
    .then(product => {
        res.status(200).json({'product': 'product added successfully'});
    })
    .catch(err => {
        res.status(400).send('product added failed');
    }); 
    
    });

app.post('/user/add', function (req, res) {
        console.log("User done++++++++",req.body);
        let user = new UserDetails({
            user_Name: req.body.userName,
            email_Id: req.body.emailId,
            password: req.body.passWord });
        console.log("post data body : ", user);
        user.save()
        .then(user => {
            res.status(200).json({'user': 'User registered successfully'});
        })
        .catch(err => {
            res.status(400).send('User registered failed');
        }); 
        
        });
        
    


productRoutes.route('/update/:id').post(function(req,res) {
    Products.findById(req.params.id, function(err, item) {
        if(!item){
            res.status(404).send('data is not found');
        } else {
            item.productId = req.body.productId;
            item.productName = req.body.productName;
            item.productPrice = req.body.productPrice;

            item.save().then(itme => {
                res.json('Product Updated');
            })
            .catch(err => {
                res.status(400).send('update not possible');
            })
        }
    })
})

app.use('/products', productRoutes);

// app.listen(PORT, function() {
//     console.log('server is running on ' + PORT);
// });
