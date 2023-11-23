const express = require("express");
const {
  createCookieToken,
  clearCookieToken,
} = require("../../api/authentication/controllers");

const router = express.Router();
router.post("/api/auth/access-token", createCookieToken);

router.post("/api/user/logout", clearCookieToken);

module.exports = router;
