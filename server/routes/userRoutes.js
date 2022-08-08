const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/info/:id", userController.user_info);

module.exports = router;
