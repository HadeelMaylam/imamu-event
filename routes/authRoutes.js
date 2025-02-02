const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.route("/signup").post(authController.signUp);
router.route("/login").post(authController.logIn);

router.route("/refresh").get(authController.refresh);
router.route("/logOut").post(authController.logOut);


module.exports = router;