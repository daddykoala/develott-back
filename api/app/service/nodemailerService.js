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
            <h3>Informations<h3/>
            <ul>
            <li>Email: ${email}<li/>
            </ul>
            <h3>Lien d'activation</h3>
            <p>${text}<p/>
            `,
	};
	smtpTransporter.sendMail(mailOptions);
  console.log("email envoyé");

};

module.exports = postMail;