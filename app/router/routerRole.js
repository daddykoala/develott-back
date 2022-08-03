const express = require("express");
const roleRouter = express.Router();
const { authenticateToken } = require("../service/jsonwebToken");

//import module
const roleController =require('../controller/roleController')


try {
/*******************
 **      GET      **              
 *******************/
    

roleRouter.get('/role',roleController.getAllRole);

/*******************
 **      POST    **              
 *******************/

roleRouter.post('/project/:id/addroletoproject',roleController.addRoleToproject);

/*******************
 **      DELETE      **              
 *******************/
roleRouter.delete('/project/:id/deleterolecustomer',roleController.deleteRoleCustomer);

/*******************
 **      PATCH      **              
 *******************/

roleRouter.patch('/project/:id/updateparticipantrole',roleController.addRoleCustomer);

} catch (error) {

}
 module.exports = roleRouter ;