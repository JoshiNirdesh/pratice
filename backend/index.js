import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbconfig.js";

dotenv.config();
const app = express();

connectDB();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
