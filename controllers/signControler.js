const bcrypt = require('bcrypt');
const {validationResult } = require('express-validator');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const User = require('../models/signup')

exports.sign = (req , res , next) => {
    res.send('Sign');
};

exports.signup = asyncHandler(async (req , res , next) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const {name , email , password} = req.body;
        bcrypt.hash(password , 10 , async (err , hashedpassword) => {
            if(err) {
                return console.log(err)
            }
            const data = new User({
            name : name,
            email:email,
            password: hashedpassword
            });
            await data.save();
        })
        return res.json({result : "send"}).status(200);
    }
    return res.json({ errors: result.array() });
});