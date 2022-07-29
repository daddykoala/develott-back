
const express = require("express");
const projectRouter = express.Router();
const jobController = express.Router();

//import module
const projectController = require("../controller/projectController");
const jobController = require("../controller/jobController");
const { authenticateToken } = require("../service/jsonwebToken");

//GET
projectRouter.get("/homeproject",projectController.fetchAllProjectHome);
projectRouter.get("/projects",projectController.fetchAllProject);
projectRouter.get("/project/guest/:id(\\d+)", authenticateToken, projectController.fetchOneProject);
projectRouter.get("/project/:id(\\d+)", projectController.oneProjectByCustomerConnected);

//POST
projectRouter.post("/project", authenticateToken, projectController.creatProject);
projectRouter.post("/project/:id(\\d+)/job", jobController.updateJob);

//DELETE
projectRouter.delete("/project/:id(\\d+)", authenticateToken, projectController.deleteProject);

//PATCH
projectRouter.patch("/project/id(\\d+)", authenticateToken, projectController.updateProject);

module.exports = projectRouter;

