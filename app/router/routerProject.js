
const express = require("express");
const projectRouter = express.Router();


//import module
const projectController = require("../controller/projectController");

const jobController = require("../controller/jobController");

const { authenticateToken } = require("../service/jsonwebToken");


//GET
projectRouter.get("/homeproject",projectController.fetchAllProject);
projectRouter.get("/projects",projectController.fetchAllProjectHome);
projectRouter.get("/project/guest/:id(\\d+)", authenticateToken, projectController.fetchOneProject);
projectRouter.get("/project/:id(\\d+)", projectController.oneProjectByCustomerConnected);

//POST
projectRouter.post("/project", authenticateToken, projectController.creatProject);



//DELETE
projectRouter.delete("/project/:id(\\d+)/delete", authenticateToken, projectController.deleteProject);

//PATCH
projectRouter.patch("/project/:id(\\d+)/update", authenticateToken,  projectController.updateProject);

module.exports = projectRouter;

