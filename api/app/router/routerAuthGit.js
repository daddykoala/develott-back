const passport = require("passport");
const express = require("express");
const gitRouter = express.Router();
//module

//ROUTER API
const CLIENT_URL = "http://localhost:3000";

gitRouter.get(
	"/auth/github",
	passport.authenticate("github", { scope: ["profile"] })
);

gitRouter.get(
	"/auth/github/callback",
	passport.authenticate("github", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

gitRouter.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			success: true,
			message: "successful",
			user: req.user,
		});
	} else {
		res.status(403).json({ message: "no user" });
	}
});
gitRouter.get("/login/failed", (_, res) => {
	res.status(401).json({
		success: false,
		message: "failure",
	});
});

module.exports = gitRouter;
