const mongoose = require("mongoose");
const { User } = require("../models/UserModel");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const registeruser = async (req, res) => {
  try {
    console.log(req.body);
    let { email, password } = req.body;
    console.log(email);
    console.log(password);
    const rounds = 10;
    let salt = bcrypt.genSaltSync(rounds);
    let hashedPassword = bcrypt.hashSync(password, salt);

    let newUser = new User({
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).send({ message: "registered" });
    console.log(newUser);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ message: "error in registering user:", err: err.message });
  }
};
const loginuser = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send({ message: "user not found!" });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return res.status(400).send({ message: "wrong password or username" });

    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: "2h",
    });

    const { password, ...userInfo } = user._doc;
    console.log(userInfo);
    res.cookie("access_token", token, { httpOnly: true });
    res.status(200).json({
      userId: userInfo._id,
      token: token,
      username: userInfo.email,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "error in loging in user:", err: err.message });
  }
};
module.exports = {
  registeruser,
  loginuser,
};
