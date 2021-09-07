const { forgotPassword } = require("../controllers/forgotPassword");
const { signupClient } = require("../controllers/signupClient");

const Router = require("express").Router();

Router.post("/register", signupClient);
Router.post("/forgot-password", forgotPassword);

module.exports = { Router };
