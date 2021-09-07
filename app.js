const express = require("express");
const cors = require("cors");
const { Router } = require("./routes/routes");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/", Router);

module.exports = { app };
