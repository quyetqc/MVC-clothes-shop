//const res = require("express/lib/response");
const Product = require("../models/Product");
const { mutipleMongooseToObject } =  require('../../util/mongoose');

class HomeController {
    
    //[GET] /
    show(req, res, next) {
        Product.find({})
                .then(Products =>{
                    res.render('home',{
                        Products : mutipleMongooseToObject(Products)
                    });
                })
                .catch(error => next(error));
    }
}

module.exports = new HomeController;
