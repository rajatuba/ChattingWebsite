"use strict";

var express = require('express');

var router = express.Router();

var homeController = require('../controllers/home_controller');

console.log('router loaded');
router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'));
module.exports = router;