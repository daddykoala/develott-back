const jobDatamapper = require('../datamapper/jobDatamapper');

const jobController ={

    async addJob (req,res) {
        const projectId= req.params.id;
        const jobName = req.body.job
        console.log('ici 2');
        try {
            const jobfinded = await jobDatamapper.getJobId(jobName);
            
    
            const result = await jobDatamapper.addJob (projectId ,jobfinded.id);
            return res.json(result);
        } catch (error) {
            console.error(error);
        };
    },

    async deleteJob (req,res) {
        const projectId= req.params.id;
        const jobName = req.body.techno
        
        try {
            
            const jobFinded = await technoDatamapper.getTechnoId(jobName);
            const result = await technoDatamapper.deleteTechno (projectId ,jobFinded.id);
            return res.json(result);

        } catch (error) {
            console.error(error);
        };
    },

};
module.exports = jobController;