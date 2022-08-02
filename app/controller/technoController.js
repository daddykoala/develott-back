
const technoDatamapper = require('../datamapper/technoDatamapper');

const technoController ={

    async addTechnoProject (req,res) {
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
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },

    async deleteTechnoUser (req,res) {
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
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },

    async addTechnoUser (req,res) {
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
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },

    async deleteTechnoProject (req,res) {
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
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },
};

module.exports= technoController ;
