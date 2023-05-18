const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

module.exports = { connect };
