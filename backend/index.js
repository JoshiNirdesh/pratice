const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbconfig");
const app = express();

dotenv.config();

connectDB();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("This is home")
})
app.use("/api/post/",require("./router/postRoutes"))

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})