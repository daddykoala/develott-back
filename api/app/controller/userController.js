const userDatamapper = require ('../datamapper/userDatamapper');
const { generateAccessToken, generateRefreshToken } = require('../service/jsonwebToken')


const userController = {
    async create (req,res) {
        
        const data = req.body;
        const result = await userDatamapper.create(data);
        res.json(result.rows)
        //todo comment generer le token a la création du profil plusierus response possible ?
    },
    
    //la generation de token
    async logIn ( req, res) {
        
        const email = req.body.email;
        const password = req.body.password;
    
        const foundUser = await userDatamapper.foundUser(email, password);
    
    
        if (foundUser.email !== email) {
          res.status(401).send("invalid credentials");
          return;
        }
        if (foundUser.password !== password) {
          res.status(401).send("invalid credentials");
          return;
        }
    
        const accessToken = generateAccessToken(foundUser);
        // todo pourquoi je donne deja le refresh?
        const refreshToken = generateRefreshToken(foundUser);
    
        res.send({
          accessToken,
          refreshToken,
        });

    },
    
    
    //pour test
    // async refreshToken ( req, res ) {

    // },
    

}





module.exports = userController ;

