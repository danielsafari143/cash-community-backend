const Account = require('../models/accountInfo');

exports.getAllAccounts = async (req , res , next ) => {
    const {userId} = req.params;
    try {
        const accounts = await Account.find({user : userId});
        res.status(200).json({accounts})
    } catch (error) {
        return res.status(404).json({msg:"errors"})
    }
};

exports.getAccount = async (req , res , next) => {
    const {id} = req.params;
    try {
        const account = await Account.findOne({_id : id});
        res.status(200).json(account)
    } catch (error) {
        return res.status(404).json({msg:"errors"})
    }
};

exports.postAccount = async (req , res , next ) => {
   const {userId} = req.params
   const {name , type } = req.body;

   try{
    const accounts = new Account({
        accountName : name,
        accountType : type ,
        user : userId
    })
    await accounts.save();
    return res.status(200).json({msg : "Created"})
   }catch(e){
    return res.status(404).json({msg:"errors"})
   }
};
