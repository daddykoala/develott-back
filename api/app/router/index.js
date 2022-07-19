const express = require("express");
const router = express.Router();

//todo middleware gestion de la 404 implementer ici

//variable de nos modules
const apiRouter = require("./router");

// gersion de l'api
router.use("/v1", apiRouter);





module.exports = router;