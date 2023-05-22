const jwt = require("jsonwebtoken");

const generateTokens = () => {
  const accessTokenPayload = {
    // Role: "Admin",
    // Issuer: "Issuer",
    email: email,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Set the expiration time for the token
    iat: Math.floor(Date.now() / 1000),
  };

  const refreshTokenPayload = {
    Role: "Admin",
    Issuer: "Issuer",
    Username: "JavaInUse",
    exp: Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60, // Set the expiration time for the token
    iat: Math.floor(Date.now() / 1000),
  };

  const accessToken = jwt.sign(accessTokenPayload, process.env.JWT_SECRET);

  const refreshToken = jwt.sign(
    refreshTokenPayload,
    process.env.REFRESH_TOKEN_SECRET
  );

  return { jwt, refreshToken };
};

module.exports = generateTokens;
