
const express = require("express");
const userRouter = express.Router();
const { authenticateToken } = require("../service/jsonwebToken");

//import module
const userController = require("../controller/userController");
const { handleRefreshToken } = require("../controller/refreshTokenController");
const refreshTokenController = require("../controller/refreshTokenController");
const logoutController = require("../controller/logoutController");
const passport = require("passport");

//validation des données
const {
	createProject,
	updateUser,
	createUser,
	updateProject,
} = require("../validator/schema/index");
const { createValidator } = require("express-joi-validation");
const validate = createValidator();

// swagger endpoint => https://develott.herokuapp.com/api-docs/

/*******************
**AUTHENTIFICATION**              
*******************/

userRouter.get(
	"/user/verify/:id/:verificationLink",
	userController.checkVerificationLink);
userRouter.get(
	"/user/verifyPassword/:id/:verificationLink",

	userController.checkPasswordResetLink);
userRouter.get("/user/refreshToken", refreshTokenController.handleRefreshToken);
userRouter.get("/user/logout", authenticateToken, logoutController.handleLogout);

/*******************
**      GET      **              
*******************/

userRouter.get(	
	/**
	 * GET /v1/users
	 * @summary Customer
	 * @description Récupére tout les utilisateurs
	 * @tags Customer
	 * 
	 * @returns {string} 200 - Description Global
	 * @example response - 200 - success response - application/json
	 * {
	 * 
		"id":"1",
		"firstname": "Abraham",
		"lastname":	"Noel",
		"password":	"pTilwRoKc!4hNzLI",
		"email":	"Eubert.Marchand@yahoo.fr",
		"charte":	"true",
		"city":	"Paris",
		"description":	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"profil_picture":	" ",
		"is_active":	"true",
		"validate":	"false",
		"username_gith":	" ",
		"url_github":	" ",
		"url_gitlab":	" ",
		"url_portfolio":	" ",
		"url_linkedin":	" ",
		"job_id":	"1",
		"validation_link":	" "
	 * }
		@example response - 400 - Intitulé 01
 	 * {"Error 400": "Demande erroné"}
	 * @return {string} 400 - Description Global
	 * 
	 * @example response - 500 - Intitulé 01
	 * {"Error 500": "le serveur a du mal à répondre"}
	 * @return {string} 500 - Description Global
	 */
	"/users", userController.fetchAllUser)


userRouter.get(
		/**
		 * GET /v1/user/findByEmail/:email
		 * @summary Customer
		 * @description Récupére un utilisateur par son email
		 * @tags Customer
		 * @param {InputPost} request.email.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 * {
			"id":"1",
			"firstname": "Abraham",
			"lastname":	"Noel",
			"password":	"pTilwRoKc!4hNzLI",
			"email":	"Eubert.Marchand@yahoo.fr",
			"charte":	"true",
			"city":	"Paris",
			"description":	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"profil_picture":	" ",
			"is_active":	"true",
			"validate":	"false",
			"username_gith":	" ",
			"url_github":	" ",
			"url_gitlab":	" ",
			"url_portfolio":	" ",
			"url_linkedin":	" ",
			"job_id":	"1",
			"validation_link":	" "
		* }
		 *@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
	"/user/findByEmail/:email", authenticateToken, userController.fetchOneUserBymail);

userRouter.get(
		/**
		 * GET /v1/user/findById/:id
		 * @summary Customer
		 * @description Récupére un utilisateur par son id
		 * @tags Customer
		 * @param {InputPost} request.id.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 * {
			"id":"1",
			"firstname": "Abraham",
			"lastname":	"Noel",
			"password":	"pTilwRoKc!4hNzLI",
			"email":	"Eubert.Marchand@yahoo.fr",
			"charte":	"true",
			"city":	"Paris",
			"description":	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"profil_picture":	" ",
			"is_active":	"true",
			"validate":	"false",
			"username_gith":	" ",
			"url_github":	" ",
			"url_gitlab":	" ",
			"url_portfolio":	" ",
			"url_linkedin":	" ",
			"job_id":	"1",
			"validation_link":	" "
		 * }
			@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
	"/user/findById/:id(\\d+)", authenticateToken, userController.fetchOneUserById);

userRouter.get(
	/**
	 * GET /home
	 * @summary Customer
	 * @description Validation de connexion
	 * @tags Customer
	 * 
	 * @returns {string} 200 - Description
	 * @example response - 200 - success response - application/json
	 * 
	 *@example response - 400 - Intitulé 01
 	 * {"Error 400": "Demande erroné"}
	 * @return {string} 400 - Description Global
	 * 
	 * @example response - 500 - Intitulé 01
	 * {"Error 500": "le serveur a du mal à répondre"}
	 * @return {string} 500 - Description Global
	 */
	"/home", authenticateToken, (_, res) => {res.send("Vous êtes bien connecté");});

userRouter.get(
	/**
	 * GET /user/logout
	 * @summary Customer
	 * @description Déconnexion session utilisateur
	 * @tags Customer
	 * 
	 * @returns {string} 200 - Description
	 * @example response - 200 - success response - application/json
	 * 
	 *@example response - 400 - Intitulé 01
	 * {"Error 400": "message 01"}
	 * @return {string} 400 - Description Global
	 * 
	 * @example response - 500 - Intitulé 01
	 * {"Error 500": "message 01"}
	 * @return {string} 500 - Description Global
	 */
	"/user/logout", authenticateToken, logoutController.handleLogout);

/*******************
**      POST      **              
*******************/

userRouter.post(
/**
 * POST /v1/user/create
 * @summary Customer
 * @description Crée un utilisateur
 * @tags Customer
 * @param {InputPost} request.body.required 
 * 
 * @return {string} 200 - Description Global
 * @example response - 200 - success response - application/json
 * {
 * 
  "firstname": "Bat",
  "lastname": "Man",
  "password": "Alfred4ever",
  "email": "lachauvesourie@inthecave.com"
 * }
 * @example response - 400 - Intitulé 01
 * {"Error 400": "Demande erroné"}
 * @return {string} 400 - Description Global
 * 
 * @example response - 500 - Intitulé 01
 * {"Error 500": "le serveur a du mal à répondre"}
 * @return {string} 500 - Description Global
 */
	"/user/create",validate.body(createUser),userController.create);

userRouter.post(
	/**
	 * GET /v1/user/newPassword
	 * @summary Customer
	 * @description Modifie le password de l'utilisateur
	 * @tags Customer
	 * @param {InputPost} request.body.required 
	 * 
	 * @returns {string} 200 - Description
	 * @example response - 200 - success response - application/json
	 * {
		"password": "newPassword"
	 * }
		@example response - 400 - Intitulé 01
 	 * {"Error 400": "Demande erroné"}
	 * @return {string} 400 - Description Global
	 * 
	 * @example response - 500 - Intitulé 01
	 * {"Error 500": "le serveur a du mal à répondre"}
	 * @return {string} 500 - Description Global
	 */
	"/user/newPassword", userController.updatePassword);

userRouter.post(
		/**
		 * POST /v1/user/techno
		 * @summary Customer
		 * @description Ajout une techno à un utilisateur
		 * @tags Customer
		 * @param {InputPost} request.body.required 
		 * 
		 * @return {string} 200 - Description Global
		 * @example response - 200 - success response - application/json
		 * {
		 * 
		  "customer_id": "1",
		  "techno_id": "2"
		 * }
		 * @example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
	"/user/techno", userController.postTechnoByCustomer);

userRouter.post(
		/**
 * POST /v1/user/forgotPassword
 * @summary Customer
 * @description Réinitialiser le password de l'utilisateur 
 * @tags Customer
 * @param {InputPost} request.body.required 
 * 
 * @return {string} 200 - Description Global
 * @example response - 200 - success response - application/json
 * {
 * 
  "password": "Alfred4ever",
  "password": "Alfred4ever"
 * }
 * @example response - 400 - Intitulé 01
 * {"Error 400": "Demande erroné"}
 * @return {string} 400 - Description Global
 * 
 * @example response - 500 - Intitulé 01
 * {"Error 500": "le serveur a du mal à répondre"}
 * @return {string} 500 - Description Global
 */
	"/user/forgotPassword", userController.createResetPasswordLink);

userRouter.post(
	/**
	* POST /v1/user/login
	* @summary Customer
	* @description Connexion au compte utilisateur
	* @tags Customer
	* @param {InputPost} request.body.required 
	* 
	* @returns {string} 200 - Description
	* @example response - 200 - success response - application/json
	* {
	  "email": "lachauvesourie@inthecave.com",
	  "password": "Alfred4ever"
	* }
	   @example response - 400 - Intitulé 01
 	* {"Error 400": "Demande erroné"}
	* @return {string} 400 - Description Global
	* 
	* @example response - 500 - Intitulé 01
	* {"Error 500": "le serveur a du mal à répondre"}
	* @return {string} 500 - Description Global
	*/
	"/user/login", userController.logIn);	

/*******************
**      PATCH      **              
*******************/

userRouter.patch(
	/**
	 * PATCH /v1/user/id
	 * @summary Customer
	 * @description Modifie le profil d'un utilisateur
	 * @tags Customer
	 * @param {InputPost} request.body.required 
	 * 
	 * @returns {string} 200 - Description
	 * @example response - 200 - success response - application/json
	 * {
	 * 
		"firstname":"Basil",
		"lastname":"Detective",
		"password":"pTilwRoKc!4hNzLI",
		"email" : "Eubert.Marchand@yahoo.fr",
		"city" : "Paris",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"profil_picture":" ",
		"username_gith":" ",
		"url_github":" ",
		"url_gitlab":" ",
		"url_portfolio":" ",
		"url_linkedin":" ",
		"job_id":2
	 * }
		@example response - 400 - Intitulé 01
 	 * {"Error 400": "Demande erroné"}
	 * @return {string} 400 - Description Global
	 * 
	 * @example response - 500 - Intitulé 01
	 * {"Error 500": "le serveur a du mal à répondre"}
	 * @return {string} 500 - Description Global
	 */
	"/user/id(\\d+)", authenticateToken, userController.updateUser);

/*******************
**      DELETE      **              
*******************/

userRouter.delete(
	/**
	* DELETE /v1/user/id
	* @summary Customer
	* @description Supprime le profil d'un utilisateur
	* @tags Customer
	* @param {InputPost} request.id.required 
	* 
	* @returns {string} 200 - Description
	* @example response - 200 - success response - application/json
	* {
	   "id" : "1"
	* }
	   @example response - 400 - Intitulé 01
 	* {"Error 400": "Demande erroné"}
	* @return {string} 400 - Description Global
	* 
	* @example response - 500 - Intitulé 01
	* {"Error 500": "le serveur a du mal à répondre"}
	* @return {string} 500 - Description Global
	*/"/user/:id(\\d+)", authenticateToken, userController.deleteUser);



module.exports = userRouter;
