const Joi = require ('joi');

const schemaUpdateProject = Joi.object({
    name : Joi.string(),
    description : Joi.string(),
    start_date : Joi.date().greater('now'),
    end_date : Joi.date(),
      //? obligation de mettre une date de fin ?      
    url_slack_server: Joi.string(),
    url_github_repo : Joi.string(),
    url_github_projet : Joi.string(),
    url_trello : Joi.string(),
}).min(1).required();

module.exports = schemaUpdateProject;