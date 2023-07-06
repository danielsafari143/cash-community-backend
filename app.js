const express = require('express');
const sign = require('./routes/signup');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

mongoose.connect('mongodb://localhost:27017/cashcommunity')

app.use(express.json());
app.use('/' , sign);


app.get('/' , (req , res) => {
    res.send("Data")
});


app.listen(4000 , () => {
    console.log(`The server is running on port ${port}`);
});