const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

// router.get('/:slug', siteController.search);
router.get('/', homeController.show);

module.exports = router;
