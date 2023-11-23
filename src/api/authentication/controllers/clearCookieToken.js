const clearCookieToken = async (req, res) => {
  const user = req.body;
  res.clearCookie("token", {
    maxAge: 0,
    secure: true,
    sameSite: "none",
  });
  res.send({ success: true });
};
module.exports = clearCookieToken;
