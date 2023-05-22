const jwt = require("jsonwebtoken");
const { User } = require("../models/UserModel");

const verifyToken = async (req, res, next) => {
  console.log("Verifying token...");
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  console.log("Token:", token);
  try {
    const decoded = jwt.verify(token, process.env.JWT);
    console.log("Decoded payload:", decoded);
    const user = await User.findOne({ email: decoded.UserInfo.email });
    console.log("User found:", user);
    if (!user) {
      console.log("User not found.");
      return res.sendStatus(403);
    }
    req.user = user._id;
    req.email = user.email;
    next();
  } catch (err) {
    console.error(err, "    from check token");
    return res.sendStatus(403);
  }
};

// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization || req.headers.Authorization;
//   if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
//   const token = authHeader.split(" ")[1];
//   jwt.verify(token, process.env.JWT, (err, decoded) => {
//     if (err) {
//       console.log(err, "    from check token file");
//       return res.sendStatus(403);
//     } //invalid token
//     req.user = decoded.UserInfo.email;
//     // req.roles = decoded.UserInfo.roles;
//     next();
//   });
// };

module.exports = verifyToken;
