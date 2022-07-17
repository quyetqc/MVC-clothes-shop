const express = require('express');
const router = express.Router();
var bodyparser = require('body-parser');
var urlencodedparser = bodyparser.urlencoded({extended:false})

const productcartController = require('../app/controllers/ProductCartController');

router.post('/addToCard',urlencodedparser, productcartController.addToCard);
router.get('/viewcards', productcartController.viewCard);
// router.get('/', productcartController.show);

module.exports = router;
