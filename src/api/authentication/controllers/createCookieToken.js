const jwt = require("jsonwebtoken");
require("dotenv").config();
const createCookieToken = async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.DB_TOKEN, {
    expiresIn: "1h",
  });
  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .send({ success: true });
};

module.exports = createCookieToken;
