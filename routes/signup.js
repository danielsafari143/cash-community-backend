const express = require('express');
const signControllers = require('../controllers/signControler')
const {body} = require('express-validator');
const router = express.Router();

router.get('/users/account' , signControllers.sign);
router.post('/users/account/register', 
body('name').isLength({min:4}).withMessage('Not a valid username').isString().notEmpty().trim().escape() ,
body('email').isEmail().withMessage('Not a valid e-mail address').trim().escape(),
body('password').isLength({min:6}).withMessage('Not a valid password').trim().escape(),
signControllers.signup);

router.post('/users/account/login' , signControllers.login)

module.exports = router;