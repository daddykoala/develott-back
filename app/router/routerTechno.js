const express = require("express");
const technoRouter = express.Router();

//import module
const technoController = require("../controller/technoController");

technoRouter.use("/project/:id(\\d+)/techno", technoController.addTechno);



module.exports = technoRouter;