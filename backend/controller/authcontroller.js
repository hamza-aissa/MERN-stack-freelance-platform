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
    console.log("saving..");
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
  const cookies = req.cookies;

  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const foundUser = await User.findOne({ email: email }).exec();
  if (!foundUser) return res.sendStatus(401); //Unauthorized
  // evaluate password
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    // const roles = Object.values(foundUser.roles).filter(Boolean);
    // create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          email: foundUser.email,
          // roles: roles,
        },
      },
      process.env.JWT,
      { expiresIn: "1h" }
    );
    const newRefreshToken = jwt.sign(
      { email: foundUser.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "15s" }
    );

    // Changed to let keyword
    let newRefreshTokenArray = !cookies?.jwt
      ? foundUser.refreshToken
      : foundUser.refreshToken.filter((rt) => rt !== cookies.jwt);

    if (cookies?.jwt) {
      /* 
            Scenario added here: 
                1) User logs in but never uses RT and does not logout 
                2) RT is stolen
                3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
            */
      const refreshToken = cookies.jwt;
      const foundToken = await User.findOne({ refreshToken }).exec();

      // Detected refresh token reuse!
      if (!foundToken) {
        // clear out ALL previous refresh tokens
        newRefreshTokenArray = [];
      }

      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        secure: true,
      });
    }

    // Saving refreshToken with current user
    foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
    const result = await foundUser.save();

    // Creates Secure Cookie with refresh token
    res.cookie("jwt", newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Send authorization roles and access token to user
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
};
const handleLogout = async (req, res) => {
  // On client, also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  // Is refreshToken in db?
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204);
  }

  // Delete refreshToken in db
  foundUser.refreshToken = foundUser.refreshToken.filter(
    (rt) => rt !== refreshToken
  );
  const result = await foundUser.save();
  console.log(result);

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.sendStatus(204);
};
module.exports = {
  registeruser,
  loginuser,
  handleLogout,
};
