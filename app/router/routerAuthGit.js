const passport = require("passport");
const express = require("express");
const gitRouter = express.Router();
const { foundByGithubUsername } = require("../datamapper/userDatamapper");
const {
	generateAccessToken,
	generateRefreshToken,
} = require("../service/jsonwebToken");

//module

//ROUTER API
const CLIENT_URL = "http://localhost:3000/projets";


/*******************
**       GET      **              
*******************/

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

gitRouter.get("/login/success", async (req, res) => {
	if (req.user) {
		const foundUser = await foundByGithubUsername(req.user._json.login);
		console.log("ici", req.user);
		console.log("là", foundUser);
		const accessToken = generateAccessToken(foundUser.email);
		const refreshToken = generateRefreshToken(foundUser.email);
		res.cookie("jwt", refreshToken, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000,
		});

		res.status(200).json({
			success: true,
			message: "successful",
			githubUser: req.user,
			foundUser: foundUser,
			accessToken: accessToken,
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
