const ProductCart = require("../models/ProductCart");
const cart = require("../../public/js/script")
const { mutipleMongooseToObject } =  require('../../util/mongoose');

class ProductCartControllers {
    
    addToCard(req, res, next) {
        // const formData = req.body;
        // const productCart = new ProductCart(formData);
        // productCart.save();

        console.log("acv")
        return true;
    }
    viewCard(req, res, next) {
        console.log("456")
        ProductCart.find({})
                .then(ProductCarts =>{
                     res.render('me/cart',{
                        ProductCarts : mutipleMongooseToObject(ProductCarts)
                     });
                 })
                 .catch(error => next(error));
    }

    //[GET] /product/
    index(req, res) {
        res.redirect(`/collections`);
    }
}

module.exports = new ProductCartControllers;