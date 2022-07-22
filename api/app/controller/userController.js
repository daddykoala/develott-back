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

    async fetchAllUser(_,res) {
      try {
          const allUser = await userDatamapper.allUser();
          return res.json(allUser);
      } catch (error) {
          console.error(error);
      };
    },

    async fetchOneUserById(req, res){
      const userId = parseInt(req.params.id, 10);
      try {
          const foundUserById = await userDatamapper.foundUserById(userId);
          return res.json(foundUserById)
      } catch (error) {
          console.error(error);
      };
    },

    async fetchOneUserBymail(req, res){
      const userMail = req.params.email;
      try {
          const foundUserBymail = await userDatamapper.foundUserBymail(userMail);
          return res.json(foundUserBymail)
      } catch (error) {
          console.error(error);
      };
    },

    async deleteUser (req, res) {
      const userId = parseInt(req.params.id, 10);
      try {
          const destroy = await userDatamapper.destroy(userId);
          return res.json(destroy);
      } catch (error) {
          console.error(error);
      };
    },

    async updateUser (req, res) {
      const body = req.body;
      const userId = parseInt(req.params.id, 10);
      try {
        const update = await userDatamapper.update(body, userId);
        return res.json(update);
      } catch (error) {
        console.error(error);
      };
    },

    //la generation de token
    async logIn (req, res) {
        
        const email = req.body.email;
        const password = req.body.password;

    
        const foundUserBymail = await userDatamapper.foundUserBymail(email);

        if (foundUserBymail.email !== email) {
          res.status(401).send("invalid credentials");
          return;
        }
        bcrypt.compare(password, foundUserBymail.password, function(err, result) {
          if(result == false){
            res.status(401).send("code invalide")
          return
         }
         if(result == true){
        //*création du JWT
        const accessToken = generateAccessToken(foundUserBymail.email)
        //* création du refreshToken
        const refreshToken = generateRefreshToken(foundUserBymail.email)

        //? Est-ce qu'on stocke le refreshToken en bdd ?
        
        res.cookie("jwt", refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        //res.cookie("jwt", refreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
        res.status(200).json({accessToken, foundUserBymail}) 
        }})       

        }
};     
module.exports = userController ;

