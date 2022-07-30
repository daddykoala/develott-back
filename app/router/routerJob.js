const express = require("express");
const jobRouter = express.Router();

//import module
const { authenticateToken } = require("../service/jsonwebToken");
const jobController = require("../controller/jobController");


jobRouter.post("/project/:id(\\d+)/job",authenticateToken,jobController.addJob);
jobRouter.delete("/project/:id(\\d+)/job",authenticateToken, jobController.deleteJob);

module.exports = jobRouter ;