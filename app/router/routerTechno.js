const express = require("express");
const technoRouter = express.Router();
const { authenticateToken } = require("../service/jsonwebToken");

//import module
const technoController = require("../controller/technoController");

technoRouter.post("/project/:id(\\d+)/techno",authenticateToken, technoController.addTechnoProject);
technoRouter.delete("/project/:id(\\d+)/techno",authenticateToken, technoController.deleteTechnoProject);

technoRouter.post("/user/:id(\\d+)/techno",authenticateToken, technoController.addTechnoUser);
technoRouter.delete("/user/:id(\\d+)/techno",authenticateToken, technoController.deleteTechnoUser);



module.exports = technoRouter;