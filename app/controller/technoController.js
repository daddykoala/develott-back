
const technoDatamapper = require('../datamapper/technoDatamapper');

const technoController ={

    async addTechnoProject (req, res, next) {
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
            if (!result){
                throw new MainError('This techno was not adding', req, res, 404);
            };
            return res.status(204).json(result);
        } catch (error) {
        console.error(error);
        };
    },

    async deleteTechnoUser (req, res, next) {
        try {
            const UserId= req.params.id;
            if (!projectId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const technoName = req.body.techno
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            if (!technoFinded){
                throw new MainError('This techno does not exists', req, res, 400);
            };
            const result = await technoDatamapper.deleteTechnoUser (UserId ,technoFinded.id);
            if (!result){
                throw new MainError('This techno was not delete', req, res, 404);
            };
            return res.status(204).json(result);
        } catch (error) {
        console.error(error);
        };
    },

    async addTechnoUser (req, res, next) {
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
            if (!result){
                throw new MainError('This techno was not adding', req, res, 404);
            };
            return res.status(204).json(result);
        } catch (error) {
        console.error(error);
        };
    },

    async deleteTechnoProject (req, res, next) {
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
            if (!result){
                throw new MainError('This user was not delete', req, res, 404);
            };
            return res.status(204).json(result);
        } catch (error) {
        console.error(error);
        };
    },
};

module.exports= technoController ;
