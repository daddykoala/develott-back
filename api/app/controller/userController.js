const userDatamapper = require ('../datamapper/userDatamapper');
const bcrypt = require('bcrypt');
const { generateAccessToken, generateRefreshToken } = require('../service/jsonwebToken');


const userController = {
  
    async create (req,res) {
        
        const data = req.body;
        console.log(data);
        const result = await userDatamapper.createUser(data);
        res.json(result)
        //todo comment generer le token a la création du profil plusierus response possible ?
    },

    //la generation de token
    async logIn ( req, res) {
        
        const email = req.body.email;
        const password = req.body.password;
    
        const foundUser = await userDatamapper.foundUser(email);
        if (foundUser.email !== email) {
          res.status(401).send("invalid credentials");
          return;
        }
        bcrypt.compare(password, foundUser.password, function(err, result) {
          if(result == false){
            res.status(401).send("code invalide")
          return
         }
        })
          
    
        //const accessToken = generateAccessToken(foundUser);
        // todo pourquoi je donne deja le refresh?
        //const refreshToken = generateRefreshToken(foundUser);
    
        res.send("vous êtes connecté"
        //   accessToken,
        //   refreshToken,
         );

        },
        
};     
      
module.exports = userController ;

