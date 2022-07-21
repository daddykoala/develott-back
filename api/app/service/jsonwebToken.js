const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    //on crée le token en donnat le secret
    return jwt.sign({user: user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: `30s` });
}


function generateRefreshToken(user) {
    //on crée le token en donnant le secret 
    return jwt.sign({user: user}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: `1d`});
}

function authenticateToken(req, res, next) {
    //on recupere notre token dans le headers de la requete
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    //si le token n'existe pas on renvoi une erreur
    if (!token) {
        return res.sendStatus(401);
    }
    //on verifie la veracité du token avec le secret.
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403)//403 c'est forbidden;
        }    
        req.user = user;
        next();
    });
}

//pour une navigation fluide de l'utilisateur
function generateAccessTokenBis (req, res) {
    //On recupere le token dans le headers
  const authHeader = req.headers["authorization"];
  console.log(req.headers["authorization"]);
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }
//ici le user estencodé dans notre token il estdecode avec le secret est passsé en argument
jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    console.log(user)
    if (err) {
      return res.sendStatus(401);
    }
  // a cette etape on doit controler que le user ai toujours ses droits en bdd .
  //todo check bdd

    delete user.iat;
    delete user.exp;
    const refreshedToken = generateAccessToken(user);
    res.send({
      accessToken: refreshedToken,
    });
  });
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    authenticateToken,
    generateAccessTokenBis
};