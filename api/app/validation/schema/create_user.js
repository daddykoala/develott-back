const Joi = require ('joi');

const schemaCreateUser = Joi.object({
    firstname : Joi.string()
                .required(),
    lastname : Joi.string()
                .required(),
    password : Joi.string()
               .pattern(/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})/)
               .required(),
    email : Joi.string()
            .pattern(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)
            .required(),
    city : Joi.string().allow(''),
    description : Joi.string().allow(''),
    profil_picture : Joi.string().allow(''),
    username_gith : Joi.string().allow(''),
    url_github : Joi.string().allow(''),
    url_gitlab : Joi.string().allow(''),
    url_portfolio : Joi.string().allow(''),
    url_linkedin : Joi.string().allow(''),
}).required();

module.exports = schemaCreateUser