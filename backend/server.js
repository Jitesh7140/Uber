const express = require("express");
const cors = require("cors"); // Renamed for clarity
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser"); // Renamed for clarity

dotenv.config();

const app = express();
const port = process.env.PORT  ;

// Middleware
app.use(cors()); 
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

// Start Server
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});