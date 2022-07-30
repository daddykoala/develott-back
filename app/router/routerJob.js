const express = require("express");
const jobRouter = express.Router();

//import module
const { authenticateToken } = require("../service/jsonwebToken");
const jobController = require("../controller/jobController");

jobRouter.post("/project/:id(\\d+)/addjob", authenticateToken,jobController.addJobProject);
jobRouter.delete("/project/:id(\\d+)/deletejob", authenticateToken,jobController.deleteJobProject);
jobRouter.patch("/user/:id(\\d+)/addjob", authenticateToken,jobController.addJobUser);
jobRouter.patch("/user/:id(\\d+)/deletejob", authenticateToken,jobController.deleteJobUser);


module.exports = jobRouter ;