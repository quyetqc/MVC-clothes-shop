const Product = require('../models/Product');
const { mutipleMongooseToObject } =  require('../../util/mongoose');

class CollectionController {
    
    //[GET] /
    index(req, res, next) {
        Product.find({})
                .then(Products =>{
                    res.render('collections',{
                        Products : mutipleMongooseToObject(Products)
                    });
                })
                .catch(error => next(error));
    }

    // [GET] /collection/:create
    create(req, res, next) {
        res.render('create');
    }
    // [POST] /collection/:store
    store(req, res, next) {
        const formData = req.body;
        formData.fullName = `${formData.name}-${formData.code}`;
        const product = new Product(formData);
        product.save();

        res.json(formData.code);
    }
}

module.exports = new CollectionController;
