const jobDatamapper = require('../datamapper/jobDatamapper');

const jobController ={

    async updateJob (req,res) {
        const projectId= req.params.id;
        const jobName = req.body.job
        console.log('ici 2');
        try {
            const jobfinded = await jobDatamapper.getJobId(jobName);
            
    
            const allProject = await jobDatamapper.addJob (projectId ,jobfinded.id);
            return res.json(allProject);
        } catch (error) {
            console.error(error);
        };
    },

};
module.exports = jobController;