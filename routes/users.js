const express = require('express');
const router = express.Router();
//importing passport
const passport = require('passport');
const usersController= require('../controllers/users_controller');

router.get('/profile',usersController.profile);


//routes for sign in and sign up
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

//for creating user
router.post('/create',usersController.create);

//use passport as a middleware to authenticate
router.post('/create-session',
    passport.authenticate('local', {failureRedirect:'/users/sign-in'}),
    usersController.createSession
);

module.exports=router;