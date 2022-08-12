const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/info/:id", userController.user_info);
router.patch("/change-password", userController.change_password);

module.exports = router;
