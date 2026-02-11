const express = require("express")
const dotenv = require("dotenv");
const { connect } = require("mongoose");
const connectDB = require("./config/dbconfig");

const app = express();

dotenv.config();

connectDB();

app.use(express.json());

app.use("/api",require("./routes/authRoutes"));

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})