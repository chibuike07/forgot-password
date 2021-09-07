const mongoose = require("mongoose");

const NewClient = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },

    resetToken: String,
    expireToken: String,
  },
  {
    timestamps: true,
  }
);
const Client = mongoose.model("newClient", NewClient);
module.exports = { Client };
