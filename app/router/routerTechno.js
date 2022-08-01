const express = require("express");
const technoRouter = express.Router();
const { authenticateToken } = require("../service/jsonwebToken");

//import module
const technoController = require("../controller/technoController");




/*******************
**      GET      **              
*******************/












/*******************
**      POST      **              
*******************/

technoRouter.post(
         /**
		 * POST /v1/project/:id(\\d+)/techno
		 * @summary Ajoute une techno necessaire à un projet
		 * @description Ajoute une techno necessaire à un projet
		 * @tags Techno
		 * @param {number} request.id.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 * {
			"projet.id":"1",
            "techno.id":"2"
		* }
		 *@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
    "/project/:id(\\d+)/techno",authenticateToken, technoController.addTechnoProject);

technoRouter.post(
         /**
		 * POST /v1/user/:id(\\d+)/techno
		 * @summary Ajoute une techno à un user
		 * @description Ajoute une techno à un user
		 * @tags Techno
		 * @param {number} request.id.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 * {
			"customer.id":"1",
            "techno.id":"2"
		* }
		 *@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
    "/user/:id(\\d+)/techno",authenticateToken, technoController.addTechnoUser);

/*******************
**     DELETE     **              
*******************/

technoRouter.delete(
         /**
		 * DELETE /v1/project/:id(\\d+)/techno
		 * @summary Retire une techno d'un projet
		 * @description Retire une techno d'un projet
		 * @tags Techno
		 * @param {number} request.id.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 * {
			"projet.id":"1",
            "techno.id":"2"
		* }
		 *@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
    "/project/:id(\\d+)/techno",authenticateToken, technoController.deleteTechnoProject);

technoRouter.delete(
         /**
		 * DELETE /v1/user/:id(\\d+)/techno
		 * @summary Retire une techno d'un utilisateur
		 * @description Retire une techno d'un utilisateur
		 * @tags Techno
		 * @param {number} request.id.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 * {
			"customer.id":"1",
            "techno.id":"2"
		* }
		 *@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
    "/user/:id(\\d+)/techno",authenticateToken, technoController.deleteTechnoUser);



module.exports = technoRouter;