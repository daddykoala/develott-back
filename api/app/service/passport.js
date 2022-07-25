const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;

//module
const { foundByGithubUsername } = require('../datamapper/userDatamapper')

passport.use(
	new GithubStrategy(
		
		{
			clientID: "882ad3a13b9b52cd68f6",
			clientSecret: "185247a333093dad2aeb7ff26b005cb4d61132ee",
			callbackURL: "/github/callback",
		},
		async function (accessToken, refreshToken, profile, done) {
			console.log(profile); 

      //! ICI on verifie que le profile.username === github_username
	  const User = await foundByGithubUsername(profile.username)
			console.log(User);
			if(!User){
				res.redirect('/user/create')
			}

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

module.exports = passport ;