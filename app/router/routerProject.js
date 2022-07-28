
const express = require("express");
const projectRouter = express.Router();

//import module
const projectController = require("../controller/projectController");
const { authenticateToken } = require("../service/jsonwebToken");

//GET
projectRouter.get(
	"/projects", 
	projectController.fetchAllProject
);
projectRouter.get("/project/:id(\\d+)", authenticateToken, projectController.fetchOneProject);

//POST
projectRouter.post("/project", authenticateToken, projectController.creatProject);

//DELETE
projectRouter.delete("/project/:id(\\d+)", authenticateToken, projectController.deleteProject);

//PATCH
projectRouter.patch("/project/id(\\d+)", authenticateToken, projectController.updateProject);

module.exports = projectRouter;

