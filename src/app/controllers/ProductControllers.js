const Product = require("../models/Product");
const { mongooseToObject } = require('../../util/mongoose');
const { json } = require("express/lib/response");

class ProductControllers {

    //[GET] /product/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then(product => {
                res.render('products/product', {
                    product: mongooseToObject(product)
                });
            })
            .catch((next) => { })
    }

    //[POST] /product/addToCard
    
    //[GET] /product/
    back(req, res) {
        res.redirect(`/collections`);
    }
}

module.exports = new ProductControllers;
