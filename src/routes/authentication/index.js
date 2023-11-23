const express = require("express");
const createCookieToken = require("../../api/authentication/controllers/createCookieToken");
const clearCookieToken = require("../../api/authentication/controllers/clearCookieToken");
const router = express.Router();
router.post("/api/auth/access-token", createCookieToken);

router.post("/api/user/logout", clearCookieToken);

module.exports = router;
