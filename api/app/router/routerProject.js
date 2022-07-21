const express = require ('express');
const projectRouter = express.Router();

//import module
const projectController = require('../controller/projectController')


//GET
//router.get('/user',)
// projectRouter.get('/',(_, res) => {
//     res.send('hello')
// })
projectRouter.get('/projects',projectController.fetchAllProject);

//POST
// projectRouter.post('/user/create',userController.create);

module.exports = projectRouter ;