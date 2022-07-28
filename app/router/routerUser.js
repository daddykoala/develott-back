
const express = require("express");
const userRouter = express.Router();
const { authenticateToken } = require("../service/jsonwebToken");

//import module
const userController = require("../controller/userController");
const { handleRefreshToken } = require("../controller/refreshTokenController");
const refreshTokenController = require("../controller/refreshTokenController");
const logoutController = require("../controller/logoutController");
const passport = require("passport");

//validation des données
const {
	createProject,
	updateUser,
	createUser,
	updateProject,
} = require("../validator/schema/index");
const { createValidator } = require("express-joi-validation");
const validate = createValidator();

//GET

userRouter.get("/auth", (_, res) => {
	console.log("123");
	res.render("index");
});
;

userRouter.get(
	"/user/verify/:id/:verificationLink",
	userController.checkVerificationLink
);
userRouter.get(
	"/user/verifyPassword/:id/:verificationLink",
	userController.checkPasswordResetLink
);
userRouter.get("/user/findById/:id(\\d+)", authenticateToken, userController.fetchOneUserById);
userRouter.get("/user/findByEmail/:email", authenticateToken, userController.fetchOneUserBymail);

userRouter.get("/home", authenticateToken, (_, res) => {
	res.send("Vous êtes bien connecté");
});

userRouter.get("/users", userController.fetchAllUser)
userRouter.get("/user/refreshToken", refreshTokenController.handleRefreshToken);
userRouter.get("/user/logout", authenticateToken, logoutController.handleLogout);

//POST
userRouter.post(
	"/user/create",
	validate.body(createUser),
	userController.create
);
userRouter.post("/user/login", userController.logIn);
userRouter.post("/user/forgotPassword", userController.createResetPasswordLink);
userRouter.post("/user/newPassword", userController.updatePassword);
userRouter.post("/user/techno", userController.postTechnoByCustomer);

//PATCH
userRouter.patch("/user/id(\\d+)", authenticateToken, userController.updateUser);

//DELETE
userRouter.delete("/user/:id(\\d+)", authenticateToken, userController.deleteUser);

module.exports = userRouter;
