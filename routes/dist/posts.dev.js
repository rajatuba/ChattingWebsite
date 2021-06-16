"use strict";

var express = require('express');

var router = express.Router(); //for authenication

var passport = require('passport');

var postsController = require('../controllers/posts_controller');

router.post('/create', passport.checkAuthentication, postsController.create);
router.get('/destroy/:id', passport.checkAuthentication, postsController.destroy);
module.exports = router;