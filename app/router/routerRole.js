const express = require("express");
const roleRouter = express.Router();
const { authenticateToken } = require("../service/jsonwebToken");

//import module
const roleController =require('../controller/roleController')


try {
/*******************
 **      GET      **              
 *******************/
    

roleRouter.get('/role',roleController.getAllRole)

/*******************
 **      POST    **              
 *******************/



/*******************
 **      DELETE      **              
 *******************/

/*******************
 **      PATCH      **              
 *******************/
} catch (error) {

}
 module.exports = roleRouter ;