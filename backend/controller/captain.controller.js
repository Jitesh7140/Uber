const captainModel = require("../models/captain.model");
const { validationResult } = require("express-validator");
const captainService = require("../service/captain.service");
const blacklistTokenModel = require("../models/blacklistToken.model");

exports.registerCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptain = await captainModel.findOne({email})
    if(isCaptain){
        return res.status(400).json({ message: "Captain already exists" });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken()

    res.status(201).json({ message: "User created successfully", token,captain});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.loginCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body; 

    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await captain.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or  password" });
    }

    const token = captain.generateAuthToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
      sameSite: "strict",
    });

    res
      .status(200)
      .json({ message: "User logged in successfully", captain, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getCaptainprofile = async (req, res) => {
  try {
    const captain = req.captain;
     
    res
      .status(200)
      .json({ message: "User profile fetched successfully", captain });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

 
 exports.logoutCaptain = async (req, res) => {
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
