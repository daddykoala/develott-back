const express = require ('express');
const userRouter = express.Router();
const { authenticateToken } = require('../service/jsonwebToken')

//import module
const userController = require('../controller/userController')


//GET
//router.get('/user',)
userRouter.get('/',(_, res) => {
    res.send('hello')
})

//POST
userRouter.post('/user/create', userController.create);
userRouter.post('/user/login', userController.logIn);

module.exports = userRouter ;