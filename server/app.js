const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const models = require("./models/index");
const router = require("./routers/index");

const PORT = process.env.API_PORT;

const app = express();

app.use(express.json());
app.use("/api", router);

app.get("/api", (req, res) => {
  res.status(200).send("Working");
});

module.exports = app;
