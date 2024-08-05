require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ConnectMongoDB } = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4000;

//connecting to database
ConnectMongoDB();

//routes
app.use("/todo", require("./routes/todoRoutes"));

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
