const express = require ('express');
const router = express.Router();

//import module
const userController = require('../controller/userController')


//GET
//router.get('/user',)

//POST
router.post('/user/login',userController.logIn);
router.post('/user/create',userController.create);

module.exports = userRouter ;