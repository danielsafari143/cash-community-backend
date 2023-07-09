const bcrypt = require('bcrypt');
const {validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const User = require('../models/signup');
const Jwt = require('jsonwebtoken');


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
    return res.status(400).json({ errors: result.array() });
});

exports.login = async (req , res) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const {email , password} = req.body;
        const user = await User.findOne({email : email});
        if(user){
            bcrypt.compare(password , user.password , (err , result) => {
                if(result){
                     Jwt.sign(email , process.env.SECRET_KEY , (error , keys) => {
                         if(error) {
                             return res.status(404).send(error)
                         }
                         return res.status(200).json({id:user._id ,name : user.name, jwt : keys})             
                     })
                }
                else {
                 return res.status(400).json({result : {msg : "Incorrect password"}})
                }
             })
        }
        else {
            return res.status(400).json({result : {msg : "Email adress not found"}})
        }
    }
    return res.status(400).json({ errors: result.array() });
}