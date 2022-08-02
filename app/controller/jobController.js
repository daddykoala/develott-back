const jobDatamapper = require('../datamapper/jobDatamapper');
const pool = require('../db/connect');

const jobController ={

    async getAllJob(_,res) {
console.log('ici');
        try {
            const result = await jobDatamapper.AllJob();
            if (result === null || result === undefined){
                return res.status(401).json({ "message": "nous n'arrivons pas à acceder a la liste des jobs !"});

            }
            
            return res.json(result)
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        }

    },



    async addJobProject (req,res) {
        const projectId= req.params.id;
        const jobName = req.body.job
        console.log('ici 2');
        try {
            const jobfinded = await jobDatamapper.getJobId(jobName);
            console.log(jobfinded.id);
            const result = await jobDatamapper.addJob (projectId ,jobfinded.id);
            
            if (result === null || result === undefined){
                
            };

            return res.status(204).json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },

    async deleteJobProject (req,res) {
        
        const tableId = req.body.id_project_has_job;
        
        try {

            
            const result = await jobDatamapper.deleteJobProject (tableId);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This job does not exists !"});
            };
            return res.status(204).json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },
        

    async addJobUser (req,res) {
        const userId= req.params.id;
        const jobName = req.body.job
        console.log('ici 2');
        try {
            const jobfinded = await jobDatamapper.getJobId(jobName);
            const result = await jobDatamapper.addJobUser (userId ,jobfinded.id);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This job does not exists !"});
            };

            return res.status(204).json(result);;

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },

    async deleteJobUser (req,res) {
        const userId= req.params.id;
        
        try {
            const result = await jobDatamapper.deleteJobUser(userId);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This job does not exists !"});
            };

            return res.status(204).json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    }

};
module.exports = jobController;