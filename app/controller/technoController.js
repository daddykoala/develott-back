
const technoDatamapper = require('../datamapper/technoDatamapper');

const technoController ={

    async addTechnoProject (req,res) {
        const projectId= req.params.id;
        const technoName = req.body.techno
        
        try {
            
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            const allProject = await technoDatamapper.addTechnoProject (projectId ,technoFinded.id);
            return res.json(allProject);

        } catch (error) {
            console.error(error);
        };
    },

    async deleteTechnoUser (req,res) {
        const projectId= req.params.id;
        const technoName = req.body.techno
        
        try {
            
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            const result = await technoDatamapper.deleteTechnoUser (projectId ,technoFinded.id);
            return res.json(result);

        } catch (error) {
            console.error(error);
        };
    },

    async addTechnoUser (req,res) {
        const UserId= req.params.id;
        const technoName = req.body.techno
        
        try {
            
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            const result = await technoDatamapper.addTechnoUser (UserId ,technoFinded.id);
            return res.json(result);

        } catch (error) {
            console.error(error);
        };
    },

    async deleteTechnoProject (req,res) {
        const projectId= req.params.id;
        const technoName = req.body.techno
        
        try {
            
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            const allProject = await technoDatamapper.deleteTechnoProject (projectId ,technoFinded.id);
            return res.json(allProject);

        } catch (error) {
            console.error(error);
        };
    },

};
            
    

module.exports= technoController ;
