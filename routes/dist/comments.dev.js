"use strict";

var express = require('express');

var router = express.Router();

var passport = require('passport');

var commentsController = require('../controllers/comments_controller');

router.post('/create', passport.checkAuthentication, commentsController.create);
module.exports = router;