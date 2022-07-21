const express = require ('express');
const userRouter = express.Router();
const { authenticateToken } = require('../service/jsonwebToken')

//import module
const userController = require('../controller/userController');
const { handleRefreshToken } = require('../controller/refreshTokenController');
const refreshTokenController = (require('../controller/refreshTokenController'))
const logoutController = (require('../controller/logoutController'))


//GET
//router.get('/user',)
userRouter.get('/',(_, res) => {
    res.send('hello')
})
userRouter.get('/home',authenticateToken, (_, res) => {
    res.send('Vous êtes bien connecté')
})
//token

//POST
userRouter.get('/user/refreshToken', refreshTokenController.handleRefreshToken);
userRouter.get('/user/logout', logoutController.handleLogout);
userRouter.post('/user/create', userController.create);
userRouter.post('/user/login', userController.logIn);



module.exports = userRouter ;