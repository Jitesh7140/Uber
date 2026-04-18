const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")

const captainSchema = new mongoose.Schema(
    {
        fullname: {
            firstname: {
                type: String,
                required: true,
                minlenght: [3, "First name must be at least 3 characters long"],
            },
            lastname: {
                type: String,
                minlenght: [3, "Last name must be at least 3 characters long"],
            },
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
            match:/^[\w\.-]+@[\w\.-]+\.\w+$/,
            minlenght:[5,'Email name must be at least 5 characters long']
        },
        password: {
            type: String,
            required: true,
            select:false
        },

        socketId:{
            type:String, 
        },  
        status:{
            type:String,
            enum:["active","inactive" ],
            default:"inactive"
        },
        vehicle:{
            color:{
                type:String,
                required:true,
                minlenght:[3,"Color must be at least 3 characters long"]
            },
            plate:{
                type:String,
                required:true,
                minlenght:[3,"plate must be at least 3 characters long"]
            },
            capacity:{
                type:Number,
                required:true,
                minlenght:[1,"capacity must be at least 1 character long"]
            },
            vehicletype:{
                type:String,
                required:true,
                enum:["car","motercycle","auto"],
                default:"motercycle"
            }
        },

        location:{
            lat:{
                type:Number, 
            },
            lng:{
                type:Number, 
            }
        } 
    },
    { timestamps: true }
)

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};



const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel