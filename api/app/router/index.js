const express = require("express");
const router = express.Router();

//todo middleware gestion de la 404 implementer ici

//variable de nos modules
const userRouter = require("./routerUser");

// gersion de l'api
router.use("/v1", userRouter);





module.exports = router;