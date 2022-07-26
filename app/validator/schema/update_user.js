const Joi = require ('joi');

const schemaUpdateUser = Joi.object({
    firstname : Joi.string(),
    lastname : Joi.string(),
    password : Joi.string()
               .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{8,})/),
    email : Joi.string()
            .pattern(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/),
    city : Joi.string(),
    description : Joi.string(),
    profil_picture : Joi.string(),
    username_gith : Joi.string(),
    url_github : Joi.string(),
    url_gitlab : Joi.string(),
    url_portfolio : Joi.string(),
    url_linkedin : Joi.string(),
}).min(1).required();

module.exports = schemaUpdateUser