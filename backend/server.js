const express = require("express");
const cors = require("cors"); // Renamed for clarity
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser"); // Renamed for clarity
const db = require("./config/db");


const userRoutes = require('./routes/user.routes')
const captainRouter = require('./routes/captain.route')


dotenv.config();
db()

const app = express();
const port = process.env.PORT  ;

// app.use((req, res, next) => {
//   console.log("Origin:", req.headers.origin);
//   console.log("IP:", req.ip);
//   console.log("URL:", req.originalUrl);
//   console.log("----------------------");
//   next();
// });

// Middleware
app.use(cors({
    origin: true,
  credentials: true 
})); 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))

// Routes   
app.use('/api/user',userRoutes)
app.use('/api/captain',captainRouter)




// Start Server
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});