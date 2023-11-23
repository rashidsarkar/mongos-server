const express = require("express");
const createCookieToken = require("../../api/authentication/controllers/createCookieToken");
const router = express.Router();
router.post("/api/auth/access-token", createCookieToken);
module.exports = router;
