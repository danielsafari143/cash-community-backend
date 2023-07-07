const express = require('express');
const expenses = require('../controllers/expenses');
const routes = express.Router();

routes.get('/user/account/expenses/:id' , expenses.createExpenses);

module.exports = routes;