require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.DB_TOKEN;
const gateman = (req, res, next) => {
  const token = req.cookies?.token;
  console.log(token);
  if (!token) {
    return res.status(401).send({ message: "NOT AUTHORIZED" });
  }
  jwt.verify(token, secret, function (err, decoded) {
    if (err) {
      return res.status(401).send({ message: "NOT AUTHORIZED" });
    }
    // console.log(decoded);
    req.user = decoded;

    next();
  });
};
module.exports = gateman;
