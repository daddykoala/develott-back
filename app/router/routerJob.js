const express = require("express");
const jobRouter = express.Router();

//import module
const { authenticateToken } = require("../service/jsonwebToken");
const jobController = require("../controller/jobController");

jobRouter.post("/project/:id(\\d+)/addjob",jobController.addJobProject);
jobRouter.delete("/project/:id(\\d+)/deletejob",jobController.deleteJobProject);
jobRouter.patch("/user/:id(\\d+)/addjob",jobController.addJobUser);
jobRouter.patch("/user/:id(\\d+)/deletejob", jobController.deleteJobUser);


module.exports = jobRouter ;