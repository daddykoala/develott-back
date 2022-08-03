const jobDatamapper = require('../datamapper/jobDatamapper');

const jobController ={


    async addJobProject (req, res) {
        try {
            const projectId= req.params.id;
            if (!projectId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const jobName = req.body.job
            const jobfinded = await jobDatamapper.getJobId(jobName);
            if (!jobfinded){
                throw new MainError('This job does not exists', req, res, 400);
            };
            const result = await jobDatamapper.addJob (projectId ,jobfinded.id);
            if (!result){
                throw new MainError('This job was not adding', req, res, 404);
            };
            return res.status(204).json(result);
        } catch (error) {
        console.error(error);
        };
    },

    async deleteJobProject (req, res) {
        try {
            const tableId = req.body.id_project_has_job;
            if (!tableId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const result = await jobDatamapper.deleteJobProject (tableId);
            if (!result){
                throw new MainError('This job was not delete', req, res, 404);
            };
            return res.status(204).json(result);
        } catch (error) {
        console.error(error);
        };
    },
        

    async addJobUser (req, res) {
        try {
            const userId= req.params.id;
            if (!userId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const jobName = req.body.job
            console.log('ici 2');
            const jobfinded = await jobDatamapper.getJobId(jobName);
            if (!jobfinded){
                throw new MainError('This job does not exists', req, res, 400);
            };
            const result = await jobDatamapper.addJobUser (userId ,jobfinded.id);
            if (!result){
                throw new MainError('This job was not adding', req, res, 404);
            };
            return res.status(204).json(result);;
        } catch (error) {
        console.error(error);
        };
    },

    async deleteJobUser (req, res) {
        try {
            const userId= req.params.id;
            if (!userId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const result = await jobDatamapper.deleteJobUser(userId);
            if (!result){
                throw new MainError('This job was not delete', req, res, 404);
            };
            return res.status(204).json(result);
        } catch (error) {
            console.error(error);
        };
    }

};
module.exports = jobController;