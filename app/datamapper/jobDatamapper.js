const pool = require('../db/connect') ;

const jobDatamapper = {
    //middleware pour recuperer l'id du job
        async getJobId (jobName, res){
            console.log(jobName);
            const result = await pool.query(`SELECT id FROM PUBLIC.JOB WHERE name = '${jobName}'`);
            console.log(result.rows[0]);
            return result.rows[0];
         },

         async addJob (projectId, jobId) {
            const sql ='INSERT INTO public.project_has_job (project_id, job_id)VALUES($1,$2)';
            try {
                const result = await pool.query(sql,[projectId,jobId]);
                return result.rows[0];
            } catch (error) {
                console.error(error);
            };
        }
    };

module.exports = jobDatamapper ;