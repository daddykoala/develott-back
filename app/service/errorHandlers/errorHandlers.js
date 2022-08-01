// const errorHandlers = {
//     async notFound (req, res, next){
//         res.sendStatus(400)
//     }
// }

const errorController = {

    _403: (req, res, next) => {
      res.status(403).send('Accès non autorisé');

      next();
    },
  
    _404: (req, res, next) => {
      res.status(404).render('404');

      next();
    },
  
    _500: (error, req, res, next) => {
      // on utilise console.trace, histoire de savoir d'ou vient l'erreur
      // (fichier et numéro de ligne - très pratique !)
      console.trace(error);
      res.status(500).send(error.message);

      next();
    },
  };
  
  module.exports = errorController;