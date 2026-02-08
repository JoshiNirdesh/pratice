const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/dbconfig");

dotenv.config();
const app = express();
app.use(express.json());
connectDB();
const port = process.env.PORT;

app.use("/api/v1/", require("./router/userRoutes"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
