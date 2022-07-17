const express = require('express');
const router = express.Router();

const productControllers = require('../app/controllers/ProductControllers');

// router.get('/addToCard/:slug', productControllers.addToCard);
router.get('/:slug', productControllers.show);
router.get('/', productControllers.back);


module.exports = router;
