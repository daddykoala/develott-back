const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const resetPasswordMail = async (email, text) => {
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
		subject: `Develott, renouvelez votre mot de passe`,
        html: `
        <h1 style="color: #5e9ca0; text-align: center;"><span style="color: #333399;">{ Develott }</span></h1>
        <p>&nbsp;</p>
        <p><strong>Bonjour, </strong></p>
        <p><strong>il semblerait que vous ayez oublié ou que vous souhaitiez modifier votre mot de passe.</strong></p>
        <p>&nbsp;</p>
        <h2 ><span style="color: #333399;">Votre E-Mail:</span></h2>
        <p>&nbsp;</p>
        <p style="text-align: center;"><strong>${email}</strong></p>
        <p>&nbsp;</p>
        <h2 ><span style="color: #333399;">Votre lien d'activation (à usage unique):</span></h2>
        <p>&nbsp;</p>
        <a href=${text} style="text-align: center;">${text}</a>
        <p>&nbsp;</p>
        <p><strong>Si vous n'êtes pas à l'origine de cette demande, ne cliquez pas sur le lien. Contactez-nous ou modifiez votre mot de passe vous-même sur notre site web, rubrique mon Profil / Modifiez mon mot de passe. </strong></p>
        <p>&nbsp;</p>
        <p><span style="color: #333399;"><strong>L'équipe de Develott</strong></span></p>     
            `,
	};
	smtpTransporter.sendMail(mailOptions);
	console.log("email envoyé");
};

module.exports = resetPasswordMail;
