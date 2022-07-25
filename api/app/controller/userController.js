const userDatamapper = require("../datamapper/userDatamapper");
const bcrypt = require("bcrypt");
const {
	generateAccessToken,
	generateRefreshToken,
} = require("../service/jsonwebToken");
const crypto = require("crypto");
const postMail = require("../service/nodemailerService.js");
const { update } = require("../datamapper/userDatamapper");
const { log } = require("console");

const userController = {
	async create(req, res) {
		const data = req.body;
		console.log(data);
		const verificationLink = crypto.randomBytes(32).toString("hex");

		//TODO créer l'utilisateur en bdd + la verificationLink
		const result = await userDatamapper.createUser(data, verificationLink);

		const user = await userDatamapper.foundUserBymail(data.email);

		const message = `http://localhost:3001/v1/user/verify/${user.id}/${verificationLink}`;

		await postMail(data.email, message);
		res.status(200).json(result);
	},

	async checkVerificationLink(req, res) {
		const data = req.params;
		const userId = data.id;
		const userVerificationLink = data.verificationLink;

		//TODO check dans base si l'email (userId) existe ET le lien de vérification
		//si utilisateur n'existe pas : res.status(400).send("Lien invalide")
		const result = await userDatamapper.verificationLink(
			userId,
			userVerificationLink
		);

		if (!result) {
			res.status(400).send("Lien invalide");
		}
		//TODO update l'utilisateur : on supprime le verificationLink + on passe Verified à true
		const valideleted = await userDatamapper.deleteLinkEmail(userId);

		const updated = await userDatamapper.updatesStatus(userId);

		res.status(200).redirect("http://localhost:3000/connexion/");
	},

	async fetchAllUser(_, res) {
		try {
			const allUser = await userDatamapper.allUser();
			return res.json(allUser);
		} catch (error) {
			console.error(error);
		}
	},

	async fetchOneUserById(req, res) {
		const userId = parseInt(req.params.id, 10);
		try {
			const foundUserById = await userDatamapper.foundUserById(userId);
			return res.json(foundUserById);
		} catch (error) {
			console.error(error);
		}
	},

	async fetchOneUserBymail(req, res) {
		const userMail = req.params.email;
		try {
			const foundUserBymail = await userDatamapper.foundUserBymail(userMail);
			return res.json(foundUserBymail);
		} catch (error) {
			console.error(error);
		}
	},

	async deleteUser(req, res) {
		const userId = parseInt(req.params.id, 10);
		try {
			const destroy = await userDatamapper.destroy(userId);
			return res.json(destroy);
		} catch (error) {
			console.error(error);
		}
	},

	async updateUser(req, res) {
		const body = req.body;
		const userId = parseInt(req.params.id, 10);
		try {
			const update = await userDatamapper.update(body, userId);
			return res.json(update);
		} catch (error) {
			console.error(error);
		}
	},

	//la generation de token

	async logIn(req, res) {
		const email = req.body.email;
		const password = req.body.password;
		console.log(email);
		const foundUser = await userDatamapper.foundUserBymail(email);

		if (foundUser.email !== email) {
			res.status(401).send("invalid credentials");
			return;
		}
		bcrypt.compare(password, foundUser.password, function (err, result) {
			if (result == false) {
				res.status(401).send("code invalide");
				return;
			}
			if (result == true) {
				//*création du JWT
				const accessToken = generateAccessToken(foundUser.email);
				//* création du refreshToken
				const refreshToken = generateRefreshToken(foundUser.email);

				//? Est-ce qu'on stocke le refreshToken en bdd ?

				res.cookie("jwt", refreshToken, {
					httpOnly: true,
					maxAge: 24 * 60 * 60 * 1000,
				});
				//res.cookie("jwt", refreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
				res.status(200).json({ accessToken, foundUser });
			}
		});
	},
};
module.exports = userController;
