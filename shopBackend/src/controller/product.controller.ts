import Product from '../model/product.model';


class ProductData {
    constructor() {

    }

    public postProductData(request, response) {
        const { product_Name, product_Price, createdAt, updatedAt } = request.body;
        const newProduct = new Product({ product_Name, product_Price, createdAt, updatedAt });
        newProduct.save()
            .then(product => {
                response.status(200).json({ message: `Added product is ${product_Name}` })
            })
            .catch(error => {
                response.status(400).send('product added failed');
            });
    }
}

export default new ProductData();
