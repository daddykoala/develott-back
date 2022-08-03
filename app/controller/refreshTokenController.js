const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../service/jsonwebToken');


const handleRefreshToken = (req, res, next) => {
  try {
    const cookies = req.cookies
    if (!cookies){
      throw new MainError('missing parameter', req, res, 400);
  };
    if(!cookies?.jwt) {
      return res.sendStatus(401);
    }
    const refreshToken = cookies.jwt;
    //? ici on retrouve le refresh dans la bdd ?
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
          throw new MainError('This is forbiden !', req, res, 403);
      }    
      const accessToken = generateAccessToken(user)
      return res.status(204).json({ user :user.user , accessToken })  
  });
  } catch (error) {
    console.error(error);
  };
  
};

module.exports = {handleRefreshToken}