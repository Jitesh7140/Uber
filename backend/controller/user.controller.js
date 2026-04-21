const userModel = require("../models/user.model");
const userService = require("../service/user.service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");

exports.registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      fullname: { firstname, lastname },
      email,
      password,
    } = req.body;
    // console.log(firstname, lastname, email, password);

    const isEmail = await userModel.findOne({ email});
    if(isEmail){
        return res.status(400).json({message:"Email already exists"});
    }

    const hashedPassword = await userModel.hashPassword(password);
    // console.log(hashedPassword);

    const user = await userService.createUser({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    // console.log(email,password)

    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or  password" });
    }

    const token = user.generateAuthToken();

    res.cookie("token", token, {
      httpOnly: false,
      maxAge: 3600000,  
    });

    res
      .status(200)
      .json({ message: "User logged in successfully", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUserprofile = async (req, res) => {
  try {
    const user = req.user;
    // console.log(user)
    res
      .status(200)
      .json({ message: "User profile fetched successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];

    await blacklistTokenModel.create({ token });

    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
