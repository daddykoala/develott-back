const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../service/jsonwebToken');


const handleRefreshToken = (req, res, next) => {
  try {
    const cookies = req.cookies
    if(!cookies?.jwt) {
      return res.sendStatus(401);
    }
    const refreshToken = cookies.jwt;
    //? ici on retrouve le refresh dans la bdd ?
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
          return res.status(403).json({ message: "This is forbiden !"});
      }    
      const accessToken = generateAccessToken(user)

      return res.status(204).json({ user :user.user , accessToken })  

  });
  } catch (error) {

    next(error);

  };
  
};

module.exports = {handleRefreshToken}