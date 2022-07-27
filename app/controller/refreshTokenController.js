const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../service/jsonwebToken');


const handleRefreshToken = (req, res) => {

  const cookies = req.cookies
  if(!cookies?.jwt) {
    return res.sendStatus(401);
  }
  const refreshToken = cookies.jwt;
  //? ici on retrouve le refresh dans la bdd ?

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
        return res.sendStatus(403)//403 c'est forbidden;
    }    

    const accessToken = generateAccessToken(user)

    res.json({ user :user.user , accessToken })   

});

  
}



module.exports = {handleRefreshToken}