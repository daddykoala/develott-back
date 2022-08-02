 const { generateAccessToken } = require('../service/jsonwebToken');


const handleLogout = (req, res, next) => {

  const cookies = req.cookies;
  try {
    if(!cookies?.jwt) {
      return res.sendStatus(204);
    }
    const refreshToken = cookies.jwt;
    
    // res.clearCookie("jwt", refreshToken, {httpOnly: true})
    res.clearCookie("jwt", {path: '/', httpOnly: true, sameSite: 'None', secure: true })
    //! En prod: si https ajouter secure: true !!!!
    res.sendStatus(204);

  } catch (error) {

    next(error);
    
  };
};



module.exports = {handleLogout};