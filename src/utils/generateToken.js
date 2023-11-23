const jwt = require("jsonwebtoken");
require("dotenv").config();
function generateToken(user) {
  return jwt.sign(user, process.env.DB_TOKEN, {
    expiresIn: "1h",
  });
}

module.exports = generateToken;
