 const { generateAccessToken } = require('../service/jsonwebToken');
 const MainError = require ('../error/customError');

const handleLogout = (req, res) => {

  try {
    const cookies = req.cookies;
    if (!cookies){
      throw new MainError('missing parameter', req, res, 400);
    };
    if(!cookies?.jwt) {
      return res.sendStatus(204);
    }
    const refreshToken = cookies.jwt;
    
    // res.clearCookie("jwt", refreshToken, {httpOnly: true})
    res.clearCookie("jwt", {path: '/', httpOnly: true, sameSite: 'None', secure: true });
    //! En prod: si https ajouter secure: true !!!!
    res.sendStatus(204);
  } catch (error) {
    console.error(error); 
  };
};



module.exports = {handleLogout};