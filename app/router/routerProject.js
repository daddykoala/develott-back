
const express = require("express");
const projectRouter = express.Router();


//import module
const projectController = require("../controller/projectController");

const { authenticateToken } = require("../service/jsonwebToken");


/*******************
**       GET     **              
*******************/

projectRouter.get(
         /**
		 * GET /v1/homeproject
		 * @summary Visualisation de tout les projets par un utilisateur 
		 * @description Visualisation de tout les projets par un utilisateur 
		 * @tags Projet
		 * @param {number} request.id.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 * {
            "id": "1",
            "project": "Learn(Err)",
            "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "picture": " ",
            "start_date": "2023-05-04T22:00:00.000Z",
            "techno": [
            "adonisjs",
            "aftereffects",
            "amazonwebservices",
            "androidstudio"
            ],
            "job": [
            "Product Owner",
            "Developpeur(se) Front-End ",
            "Developpeur(se) Back-End",
            "Developpeur(se) Mobile "
            ],
            "role_id": "1",
            "firstname": "Abraham",
            "lastname": "Noel",
            "c_profil_picture": " "
		* }
		 *@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
    "/homeproject",projectController.fetchAllProject);

projectRouter.get("/projects",projectController.fetchAllProjectHome);

projectRouter.get(
         /**
		 * GET /v1/project/guest/:id(\\d+)
		 * @summary Visualisation d'un projet par un utilisateur NON connecté
		 * @description Visualisation d'un projet par un utilisateur NON connecté
		 * @tags Projet
		 * @param {number} request.id.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 {
            "id": 1,
            "name": "Learn(Err)",
            "exerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "picture_project": " ",
            "start_date": "2023-05-04T22:00:00.000Z",
            "end_date": "2025-05-04T22:00:00.000Z",
            "url_slack_server": " ",
            "url_github_repo": " ",
            "url_github_projet": " ",
            "url_trello": " ",
            "created_at": "2022-07-31T06:42:50.522Z",
            "updated_at": "2022-07-31T06:42:50.522Z"
        }
		 *@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
    "/project/guest/:id(\\d+)", projectController.fetchOneProject);

projectRouter.get(
         /**
		 * GET /v1/project/:id(\\d+)
		 * @summary Visualisation d'un projet par un utilisateur connecté 
		 * @description Visualisation d'un projet par un utilisateur connecté 
		 * @tags Projet
		 * @param {number} request.id.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 * {
            "id": 1,
            "name": "Learn(Err)",
            "exerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "picture_project": " ",
            "start_date": "2023-05-04T22:00:00.000Z",
            "end_date": "2025-05-04T22:00:00.000Z",
            "url_slack_server": " ",
            "url_github_repo": " ",
            "url_github_projet": " ",
            "url_trello": " ",
            "created_at": "2022-07-31T06:42:50.522Z",
            "updated_at": "2022-07-31T06:42:50.522Z"
		* }
		 *@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
    "/project/:id(\\d+)", authenticateToken,projectController.oneProjectByCustomerConnected);

/*******************
**      POST     **              
*******************/

projectRouter.post(
         /**
		 * POST /v1/project
		 * @summary Crée un projet
		 * @description Crée un projet
		 * @tags Projet
		 * @param {number} request.id.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 * {
			"projet.id":"1",
            "name":"tasseàthé",
            "exerpt": "lorem ipsum",
            "description": "lorem ipsum"
		* }
		 *@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
    "/project", projectController.creatProject);

/*******************
**      PATCH     **              
*******************/

projectRouter.patch(
        /**
		 * PATCH /v1/project/:id(\\d+)
		 * @summary Modifie un projet
		 * @description Modifie un projet
		 * @tags Projet
		 * @param {number} request.id.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 * {
			"projet.id":"1",
            "name":"tasseàthé",
            "exerpt": "lorem ipsum",
            "description": "lorem ipsum",
            "picture_project": " ",
            "start_date": "12/06/2024",
            "end_date": "06/12/2024",
            "url_slack_server": " ",
            "url_github_repo": " ",
            "url_github_projet": " ",
            "url_trello": " "
		* }
		 *@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
    "/project/:id(\\d+)//", authenticateToken,  projectController.updateProject);

/*******************
**      DELETE    **              
*******************/

projectRouter.delete(
         /**
		 * DELETE /v1/project/:id(\\d+)
		 * @summary Supprime un projet
		 * @description Supprime un projet
		 * @tags Projet
		 * @param {number} request.id.required 
		 * 
		 * @returns {string} 200 - Description
		 * @example response - 200 - success response - application/json
		 * {
			"projet.id":"1"
		* }
		 *@example response - 400 - Intitulé 01
 		 * {"Error 400": "Demande erroné"}
		 * @return {string} 400 - Description Global
		 * 
		 * @example response - 500 - Intitulé 01
	 	 * {"Error 500": "le serveur a du mal à répondre"}
		 * @return {string} 500 - Description Global
		 */
    "/project/:id(\\d+)", authenticateToken, projectController.deleteProject);



//PATCH
projectRouter.patch("/project/:id(\\d+)", authenticateToken,  projectController.updateProject);


module.exports = projectRouter;

