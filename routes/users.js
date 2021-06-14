const express = require('express');
const router = express.Router();
const usersController= require('../controllers/users_controller');

router.get('/profile',usersController.profile);

//routes for sign in and sign up
router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

//for creating user
router.post('/create',usersController.create);

//signing in and creating session
router.post('/create-session',usersController.createSession);

module.exports=router;