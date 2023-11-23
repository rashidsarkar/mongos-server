const jwt = require("jsonwebtoken");
const createCookieToken = async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, secret, {
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
