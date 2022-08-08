const express = require("express");
const loginController = require("../controllers/loginController");

const router = express.Router();

// router.get("/", blogController.blog_index);
// router.post("/", blogController.blog_create_post);
router.post("/create-user", loginController.user_create_post);
router.post("/auth-user", loginController.user_auth_post);
// router.get("/user-dashboard", loginController.login_required);
// router.get("/:id", blogController.blog_details);
// router.delete("/:id", blogController.blog_delete);

module.exports = router;
