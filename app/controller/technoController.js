
const technoDatamapper = require('../datamapper/technoDatamapper');
const MainError = require ('../error/customError');

const technoController ={

    async addTechnoProject (req, res) {
        try {
            const projectId= req.params.id;
            if (!projectId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const technoName = req.body.techno
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            if (!technoFinded){
                throw new MainError('This techno does not exists', req, res, 400);
            };
            const result = await technoDatamapper.addTechnoProject (projectId ,technoFinded.id);
            return res.status(200).json(result);
        } catch (error) {
        console.error(error);
        };
    },

    async deleteTechnoUser (req, res) {
        try {
            const UserId= req.params.id;
            if (!UserId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const technoName = req.body.techno
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            if (!technoFinded){
                throw new MainError('This techno does not exists', req, res, 400);
            };
            const result = await technoDatamapper.deleteTechnoUser (UserId ,technoFinded.id);
            return res.status(204).json(result);
        } catch (error) {
        console.error(error);
        };
    },

    async addTechnoUser (req, res) {
        try {
            const UserId= req.params.id;
            if (!UserId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const technoName = req.body.techno
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            if (!technoFinded){
                throw new MainError('This techno does not exists', req, res, 400);
            };
            const result = await technoDatamapper.addTechnoUser (UserId ,technoFinded.id);
            return res.status(200).json(result);
        } catch (error) {
        console.error(error);
        };
    },

    async deleteTechnoProject (req, res) {
        try {
            const projectId= req.params.id;
            if (!projectId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const technoName = req.body.techno
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            if (!technoFinded){
                throw new MainError('This techno does not exists', req, res, 400);
            };
            const result = await technoDatamapper.deleteTechnoProject (projectId ,technoFinded.id);
            return res.status(204).json(result);
        } catch (error) {
        console.error(error);
        };
    },
};

module.exports= technoController ;
