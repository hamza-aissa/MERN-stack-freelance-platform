const jwt = require("jsonwebtoken");
const { User } = require("../models/UserModel");
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  console.log(token, " TOKEN BY VERIFYTOKEN.js");
  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err) {
      console.log(err, "    from check token file");
      return res.sendStatus(403);
    } //invalid token
    req.user = decoded.UserInfo.email;
    // req.roles = decoded.UserInfo.roles;
    next();
  });
};

module.exports = verifyToken;
