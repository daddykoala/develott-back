
const technoDatamapper = require('../datamapper/technoDatamapper');

const technoController ={

    async addTechnoProject (req, res, next) {
        const projectId= req.params.id;
        const technoName = req.body.techno
        
        try {
            
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            const result = await technoDatamapper.addTechnoProject (projectId ,technoFinded.id);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This techno does not exists !"});
            };
            return res.status(204).json(result);

        } catch (error) {
        next(error);
        };
    },

    async deleteTechnoUser (req, res, next) {
        const projectId= req.params.id;
        const technoName = req.body.techno
        try {
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            const result = await technoDatamapper.deleteTechnoUser (projectId ,technoFinded.id);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This techno does not exists !"});
            };
            return res.status(204).json(result);

        } catch (error) {
        next(error);
        };
    },

    async addTechnoUser (req, res, next) {
        const UserId= req.params.id;
        const technoName = req.body.techno
        try {
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            const result = await technoDatamapper.addTechnoUser (UserId ,technoFinded.id);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This techno does not exists !"});
            };
            return res.status(204).json(result);

        } catch (error) {
        next(error);
        };
    },

    async deleteTechnoProject (req, res, next) {
        const projectId= req.params.id;
        const technoName = req.body.techno
        try {
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            const result = await technoDatamapper.deleteTechnoProject (projectId ,technoFinded.id);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This techno does not exists !"});
            };
            return res.status(204).json(result);

        } catch (error) {
        next(error);
        };
    },
};

module.exports= technoController ;
