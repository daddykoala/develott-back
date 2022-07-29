const technoDatamapper = require('../datamapper/technoDatamapper');

const technoController ={

    async addTechno (req,res) {
        const projectId= req.params.id;
        const technoName = req.body.techno
        console.log('ici 2');
        try {
            console.log("ici");
            const technoFinded = await technoDatamapper.getTechnoId(technoName);
            const allProject = await technoDatamapper.addTechno (projectId ,technoFinded.id);
            return res.json(allProject);

        } catch (error) {
            console.error(error);
        };
    },

};
            
    

module.exports= technoController ;
