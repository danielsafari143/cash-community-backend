const express = require('express');
const accountControllers = require('../controllers/accountControllers')
const {param} = require('express-validator');
const router = express.Router();

router.get('/user/accounts/all/:id', param('id').isString().notEmpty().withMessage('Incoorrect id').escape() , accountControllers.getAccount );

router.get('/user/accounts/:userId',param('userId').isString().notEmpty().withMessage('Incoorrect id').escape(), accountControllers.getAllAccounts);

router.post('/user/accounts/:userId',param('userId').isString().notEmpty().withMessage('Incoorrect id').escape(),accountControllers.postAccount);

module.exports = router;