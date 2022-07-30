const jobDatamapper = require('../datamapper/jobDatamapper');

const jobController ={



    async addJobProject (req,res) {
        const projectId= req.params.id;
        const jobName = req.body.job
        console.log('ici 2');
        try {
            const jobfinded = await jobDatamapper.getJobId(jobName);
            console.log(jobfinded.id);
            const result = await jobDatamapper.addJob (projectId ,jobfinded.id);
            return res.json(result);
        } catch (error) {
            console.error(error);
        };
    },

    async deleteJobProject (req,res) {
        const projectId= req.params.id;
        const jobName = req.body.job;
        try {
            
            const jobFinded = await jobDatamapper.getJobId(jobName);
            
            const result = await jobDatamapper.deleteJobProject (projectId ,jobFinded.id);
            return res.json(result);

        } catch (error) {
            console.error(error);
        };
    },
        

    async addJobUser (req,res) {
        const userId= req.params.id;
        const jobName = req.body.job
        console.log('ici 2');
        try {
            const jobfinded = await jobDatamapper.getJobId(jobName);
            
    
            const result = await jobDatamapper.addJobUser (userId ,jobfinded.id);
            return res.json(result);
        } catch (error) {
            console.error(error);
        };
    },

    async deleteJobUser (req,res) {
        const userId= req.params.id;
        
        try {
            const result = await jobDatamapper.deleteJobUser(userId);
            return res.json(result);

        } catch (error) {
            console.error(error);
        };
    },

};
module.exports = jobController;