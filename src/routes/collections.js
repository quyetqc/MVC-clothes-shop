const express = require('express');
const router = express.Router();

const collectionController = require('../app/controllers/CollectionController');

router.get('/create', collectionController.create);
router.post('/store', collectionController.store);
router.get('/', collectionController.index);

module.exports = router;
