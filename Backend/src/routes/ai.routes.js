const express = require("express");
const aiController = require("../controllers/ai.controller");
const router = express.Router();

router.get("/get-response");

module.exports = router;
