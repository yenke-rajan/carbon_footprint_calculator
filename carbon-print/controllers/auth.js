const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
const {UnauthenticatedError} = require('../errors/index');





const login = async (req,res)=>{
    const {email,password} = req.body;
    console.log(req.body);
    if(!email){
        throw new UnauthenticatedError(`Please provide email.`);
    }
    if(!password){
        throw new UnauthenticatedError(`Please provide password.`);
    }

    const user = await User.findOne({email});
    if(!user){
        throw new UnauthenticatedError(`User with email:${email} not found`);
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new UnauthenticatedError(`Wrong password for email:${email}`);
    }
    const token = user.createJWT();
     // token,user:{name: user.name}
    res.status(StatusCodes.OK).json({
        token,user
    });
}

const register = async (req,res)=>{
    const { name,email,password} = req.body;

    if(!email){
        throw new UnauthenticatedError(`Please provide email.`);
    }
    if(!name){
        throw new UnauthenticatedError(`Please provide name.`);
    }
    if(!password){
        throw new UnauthenticatedError(`Please provide password.`);
    }

    const userCheck = await User.findOne({email});
    if(userCheck){
        throw new UnauthenticatedError(`User with email: ${email} already exists.`);
    }else{
        const user = await User.create({
            ...req.body
        });
        const token = user.createJWT();
        res.status(StatusCodes.CREATED).json({token,user});
    }
}

module.exports={
    login,register
}