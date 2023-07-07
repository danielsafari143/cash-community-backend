const express = require('express');
const sign = require('./routes/signup');
const account = require('./routes/account')
const expenses = require('./routes/expenses')
const incomes = require('./routes/incomes')
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT;

try {
    mongoose.connect(process.env.SERVER)
} catch (error) {
    res.json({error})
}

app.use(express.json());
app.use(cors());
app.use('/' , sign);
app.use('/' , account);
app.use('/' , expenses);
app.use('/' , incomes)

app.listen(port , () => {
    console.log(`The server is running on port ${port}`);
});