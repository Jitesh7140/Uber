const userModel = require("../models/user.model")
const captainModel = require("../models/captain.model")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const blacklistTokenModel = require('../models/blacklistToken.model')



exports.authUser = async (req, res, next) => {
    try {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isblacklisted = await blacklistTokenModel.findOne({token})
    
    if(isblacklisted){
        return res.status(401).json({ message: "Unauthorized " });
    }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded._id);
        
        return next(); 
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" });
    }
}   


exports.authCaptain = async (req, res, next) => {
    try {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isblacklisted = await blacklistTokenModel.findOne({token})
    
    if(isblacklisted){
        return res.status(401).json({ message: "Unauthorized " });
    }
    
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.captain = await captainModel.findById(decoded._id);
        
        return next(); 
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Internal server error" });
    }
}   