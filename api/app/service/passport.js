const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;

// 			//TODO ICI on vérifie que le profile.username === github_username
// 			// const User = await foundByGithubUsername(profile.username)
// 			// 	console.log(User);
// 			// 	if(!User){
// 			// 		res.redirect('/user/create')
// 			// 	}

passport.use(
	new GithubStrategy(
		{
			clientID: "882ad3a13b9b52cd68f6",
			clientSecret: "185247a333093dad2aeb7ff26b005cb4d61132ee",
			callbackURL: "http://localhost:3001/v1/auth/github/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			console.log(profile);
			done(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
