 const { generateAccessToken } = require('../service/jsonwebToken');


const handleLogout = (req, res) => {

  const cookies = req.cookies;
  if(!cookies?.jwt) {
    return res.sendStatus(204);
  }
  const refreshToken = cookies.jwt;
  
  // res.clearCookie("jwt", refreshToken, {httpOnly: true})
  res.clearCookie("jwt", refreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
  //! En prod: si https ajouter secure: true !!!!
  res.sendStatus(204);

  
}



module.exports = {handleLogout};