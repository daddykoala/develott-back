const express = require ('express');
const userRouter = express.Router();

//import module
const userController = require('../controller/userController')


//GET
userRouter.get('/users',userController.fetchAllUser);
userRouter.get('/user/:id(\\d+)',userController.fetchOneUserById);
userRouter.get('/user/:email',userController.fetchOneUserBymail);

//POST
userRouter.post('/user/login',userController.logIn);
userRouter.post('/user/create',userController.create);

//DELETE
userRouter.delete('/user/:id',userController.deleteUser);

module.exports = userRouter ;