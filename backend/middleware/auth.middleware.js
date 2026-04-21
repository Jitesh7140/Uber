const userModel = require("../models/user.model")
const captainModel = require("../models/captain.model")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const blacklistTokenModel = require('../models/blacklistToken.model')



exports.authUser = async (req, res, next) => {
    // 1. Token nikaalo
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    try {
        // 2. Blacklist check
        const isBlacklisted = await blacklistTokenModel.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: "Unauthorized: Token blacklisted" });
        }

        // 3. Verify
        // Important: Agar JWT_SECRET defined nahi hai, toh yahan error aayega
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is not defined in .env");
            return res.status(500).json({ message: "Server configuration error" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        return next();
    } catch (error) {
        // Yahan specific error log karein
        console.error("JWT Verification failed:", error.message);
        
        if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: `Unauthorized: ${error.message}` });
        }
        
        return res.status(500).json({ message: "Internal server error" });
    }
};


exports.authCaptain = async (req, res, next) => { 
    try {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    console.log("token in captain auth:" , token)
    if (!token) {
        return res.status(401).json({ message: "Unauthorized token not found" });
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