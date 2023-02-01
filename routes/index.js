const express = require('express');
const router = express.Router();
const passport = require('passport');

//import the user controller
const userController = require('../controller/user');

//import the quotation controller
const quotationController = require('../controller/quotation');

//mention the api
router.post('/sign-up', userController.createUser);

router.post('/sign-in', userController.signIn);

router.get('/user-details', passport.authenticate('jwt', {session: false}), userController.userDetails);

router.post('/create-quotation', passport.authenticate('jwt', {session: false}), quotationController.createQuotation);

router.get('/quotations', passport.authenticate('jwt', {session: false}), quotationController.getAllQuotations);

//export the router
module.exports = router;