const express = require ('express');
const userRouter = express.Router();

//import module
const userController = require('../controller/userController')


//GET
//router.get('/user',)
userRouter.get('/',(_, res) => {
    res.send('hello')
})

//POST
userRouter.post('/user/login',userController.logIn);
userRouter.post('/user/create',userController.create);

module.exports = userRouter ;