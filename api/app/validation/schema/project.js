const Joi = require ('joi');

const schemaProject = Joi.object({
    name : Joi.string()
                .required(),
    description : Joi.string()
                .required(),
    start_date : Joi.string()
               .required(),
    end_date : Joi.string()
            .required(),
    url_slack_server: Joi.string().allow(''),
    url_github_repo : Joi.string().allow(''),
    url_github_projet : Joi.string().allow(''),
    uurl_trello : Joi.string().allow(''),
}).required();

module.exports = schemaproject;