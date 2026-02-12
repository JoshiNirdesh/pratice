const express = require("express")
const dotenv = require("dotenv");
const { connect } = require("mongoose");
const connectDB = require("./config/dbconfig");
const cors = require("cors")
const app = express();

dotenv.config();

connectDB();

app.use(express.json());
app.use(cors())

app.use("/api/post/",require("./routes/postRoute"))
app.use("/api",require("./routes/authRoutes"));

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})