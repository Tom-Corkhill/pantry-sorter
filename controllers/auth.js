const User = require("../models/User");
const passport = require("passport");

// @desc     Create new User
// @route    POST /api/v1/register
// @access   Public
exports.signupUser = async (req, res, next) => {
    try {

        const newUser = new User({username: req.body.username});
        const user = await User.register(newUser, req.body.password, function(err, user) {
            if(err) {
                console.log(err);
            } else {
                passport.authenticate("local")(req, res, function() {
                    res.redirect("/pantry");
                });
                return res.status(201).json({
                    success: true,
                    data: user
                });
            }
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

// @desc    Login User
// @route   POST /api/v1
// @access  public
exports.loginUser = async (req, res, next) => {
    try {
        passport.authenticate("local", {
            successRedirect: "/pantry",
            failureRedirect: "/"
        });
        return res.status(201).json({
            success: true,
            data: "Logged in"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

// @desc    Logout User
// @route   GET /api/v1/logout
// access   public
exports.logoutUser = async (req, res, next) => {
    try {
        const logout = await req.logout();
        res.redirect("/");
        return res.status(201).json({
            success: true,
            data: logout
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}