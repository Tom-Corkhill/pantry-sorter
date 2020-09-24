const express = require("express");
const router = express.Router();
const { signupUser, loginUser, logoutUser } = require("../controllers/auth");


router
    .route("/register")
    .post(signupUser);

router
    .route("/")
    .post(loginUser);

router
    .route("/logout")
    .get(logoutUser)


module.exports = router;