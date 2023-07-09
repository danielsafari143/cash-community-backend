const express = require('express');
const signControllers = require('../controllers/signControler')
const {body} = require('express-validator');
const router = express.Router();

router.get('/users' , signControllers.sign);
router.post('/users/register', 
body('name').isLength({min:4}).withMessage('Not a valid username').isString().notEmpty().trim().escape() ,
body('email').isEmail().withMessage('Not a valid e-mail address').trim().escape(),
body('password').isLength({min:6}).withMessage('Not a valid password').trim().escape(),
signControllers.signup);

router.post('/users/login',body('email').isEmail().withMessage('Not a valid e-mail address').trim().escape(),
body('password').isLength({min:6}).withMessage('Not a valid password').trim().escape(),
signControllers.login)

module.exports = router;