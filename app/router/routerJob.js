const express = require("express");
const jobRouter = express.Router();

const jobController = require("../controller/jobController");

jobRouter.post("/project/:id(\\d+)/job",jobController.addJob);

module.exports = jobRouter ;