const express = require("express");
const router = express.Router();

//todo middleware gestion de la 404 implementer ici

//variable de nos modules
const userRouter = require("./routerUser");
const projectRouter = require("./routerProject");
const gitRouter = require("./routerAuthGit");

// gersion de l'api
router.use("/v1", userRouter);
router.use("/v1", projectRouter);
router.use("/v1", gitRouter);

module.exports = router;
