const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const postMail = async (email, text) => {
	

	const myOAuth2Client = new OAuth2(
		"285125527770-5rm3ape2vu1votrn9vvupu3mq2o2svn9.apps.googleusercontent.com",
		"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"
	);

	myOAuth2Client.setCredentials({
		refresh_token:
			"1//04MjZ_VvxZdlUCgYIARAAGAQSNwF-L9IrFMahPSQGgNsmg99uZAk_l3vpJiGA0HXvB66Xm2d1SlSFIkNBRpqFesK4USAUBqNd8e0",
	});

	const myAccessToken = myOAuth2Client.getAccessToken();

	const smtpTransporter = nodemailer.createTransport({
		service: "gmail",
		// port: 465,
		auth: {
			type: "OAuth2",
			user: "hugo.latreille@gmail.com",
			clientId:
				"285125527770-5rm3ape2vu1votrn9vvupu3mq2o2svn9.apps.googleusercontent.com",
			clientSecret: "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",
			refreshToken:
				"1//04MjZ_VvxZdlUCgYIARAAGAQSNwF-L9IrFMahPSQGgNsmg99uZAk_l3vpJiGA0HXvB66Xm2d1SlSFIkNBRpqFesK4USAUBqNd8e0",
			accessToken: myAccessToken,
		},
	});

	const mailOptions = {
		from: "hugo.latreille@gmail.com",
		to: email,
		subject: `Develott, veuillez activer votre compte`,
		html: `
		<h1 style="color: #5e9ca0; text-align: center;"><span style="color: #333399;">{ Develott }</span></h1>
		<p>&nbsp;</p>
		<p><strong>Bienvenue, ${email}</strong></p>
		<p><strong>Vous n'êtes qu'à un<em> click</em> de rejoindre la communauté de Develott.</strong></p>
		<p>&nbsp;</p>
		<h3><span style="color: #333399;">Votre lien d'activation (à usage unique):</span></h3>
		<p>&nbsp;</p>
		<a href=${text} style="text-align: center;">${text}</a>
		<p>&nbsp;</p>
		<p><span style="color: #679E33;"><strong>C'est aussi simple que ça ! Après avoir cliqué sur le lien d'activation, vous serez redirigé vers notre site. Il vous suffira de vous connecter avec le mail et le mot de passe choisi pendant l'inscription.</strong></span></p>
		<p>&nbsp;</p>
		<p><span style="color: #333399;"><strong>L'équipe de Develott</strong></span></p>
            `,
	};
	smtpTransporter.sendMail(mailOptions);
  console.log("email envoyé");

};

module.exports = postMail;