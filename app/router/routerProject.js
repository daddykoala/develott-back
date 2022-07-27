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
projectRouter.get("/project", projectController.fetchOneProject);

//POST
projectRouter.post("/project", projectController.creatProject);

//DELETE
projectRouter.delete("/project/:id(\\d+)", projectController.deleteProject);

//PATCH

module.exports = projectRouter;