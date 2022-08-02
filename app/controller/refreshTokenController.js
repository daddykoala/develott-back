const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../service/jsonwebToken');


const handleRefreshToken = (req, res) => {

  const cookies = req.cookies
  try {

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
      res.json({ user :user.user , accessToken })   
  });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Database Error", error: error});
  };
  
};

module.exports = {handleRefreshToken}