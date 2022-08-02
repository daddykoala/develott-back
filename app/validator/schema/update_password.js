const Joi = require ('joi')

const schemaUpdatePassword= {
    password : Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{8,})/).required().messages({"password":"Doit comporter au moins 8 caractéres une lettre minuscule une lettre majuscule et un caractére spécial"})

}

module.exports = schemaUpdatePassword;
