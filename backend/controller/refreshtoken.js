const { User } = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
require("dotenv").config();

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) {
    console.log("Sending 401 response");
    return res.sendStatus(401);
  }
  const refreshToken = cookies.jwt;
  console.log(`refreshToken: ${refreshToken}`); // Log the value of refreshToken
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  const foundUser = await User.findOne({ refreshToken }).exec();
  console.log(`foundUser: ${JSON.stringify(foundUser)}`); // Log the value of foundUser
  if (!foundUser) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        console.log(`err: ${err}`); // Log the value of err
        console.log(`decoded: ${JSON.stringify(decoded)}`); // Log the value of decoded
        if (err || err.name === "TokenExpiredError") {
          // Modified: Handle TokenExpiredError
          console.log("Sending 403 response Detected refresh token reuse 1");
          return res.sendStatus(403); //Forbidden
        }
        const hackedUser = await User.findOne({
          email: decoded.email,
        }).exec();
        hackedUser.refreshToken = [];
        const result = await hackedUser.save();

        console.log("Sending 403 response in Detected refresh token reuse 2");
        return res.sendStatus(403);
      }
    );
  } else {
    // const newRefreshTokenArray = foundUser.refreshToken.filter(
    //   (rt) => rt !== refreshToken
    // );
    const newRefreshTokenArray = foundUser.refreshToken.filter(
      (rt) => rt !== refreshToken
    );
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        console.log(`err: ${err}`); // Log the value of err
        console.log(`decoded: ${JSON.stringify(decoded)}`); // Log the value of decoded
        if (err || err.name === "TokenExpiredError") {
          // Modified: Handle TokenExpiredError
          foundUser.refreshToken = [...newRefreshTokenArray];
          const result = await foundUser.save();
          return res.sendStatus(403);
        }
        if (foundUser.email !== decoded.email) return res.sendStatus(403);
        console.log("Sending 403 response in jwt evaluation");
        // const roles = Object.values(foundUser.roles);
        const accessToken = jwt.sign(
          {
            UserInfo: {
              email: decoded.email,
              // roles: roles,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "10s" }
        );

        const newRefreshToken = jwt.sign(
          { email: foundUser.email },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: "7d" }
        );

        // Saving refreshToken with current user
        foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
        const result = await foundUser.save();

        res.cookie("jwt", newRefreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "None",
          // maxAge: 24 * 60 * 60 * 1000,
          maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.json({ accessToken });
      }
    );
  }
};

module.exports = { handleRefreshToken };
// const handleRefreshToken = async (req, res) => {
//   const cookies = req.cookies;
//   if (!cookies?.jwt) {
//     console.log("Sending 401 response");
//     return res.sendStatus(401);
//   }
//   const refreshToken = cookies.jwt;
//   res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });

//   const foundUser = await User.findOne({ refreshToken }).exec();

//   // Detected refresh token reuse!
//   if (!foundUser) {
//     jwt.verify(
//       refreshToken,
//       process.env.REFRESH_TOKEN_SECRET,
//       async (err, decoded) => {
//         if (err) {
//           console.log("Sending 403 response Detected refresh token reuse 1");
//           return res.sendStatus(403); //Forbidden
//         }
//         // Delete refresh tokens of hacked user
//         const hackedUser = await User.findOne({
//           email: decoded.email,
//         }).exec();
//         hackedUser.refreshToken = [];
//         const result = await hackedUser.save();

//         console.log("Sending 403 response in Detected refresh token reuse 2");
//         return res.sendStatus(403); //Forbidden
//       }
//     );
//   } else {
//     const newRefreshTokenArray = foundUser.refreshToken.filter(
//       (rt) => rt !== refreshToken
//     );
//     jwt.verify(
//       refreshToken,
//       process.env.REFRESH_TOKEN_SECRET,
//       async (err, decoded) => {
//         if (err) {
//           foundUser.refreshToken = [...newRefreshTokenArray];
//           const result = await foundUser.save();
//           return res.sendStatus(403);
//         }
//         if (foundUser.email !== decoded.email) return res.sendStatus(403);
//         console.log("Sending 403 response in jwt evaluation");
//         // const roles = Object.values(foundUser.roles);
//         const accessToken = jwt.sign(
//           {
//             UserInfo: {
//               email: decoded.email,
//               // roles: roles,
//             },
//           },
//           process.env.ACCESS_TOKEN_SECRET,
//           { expiresIn: "10s" }
//         );

//         const newRefreshToken = jwt.sign(
//           { email: foundUser.email },
//           process.env.REFRESH_TOKEN_SECRET,
//           { expiresIn: "15s" }
//         );
