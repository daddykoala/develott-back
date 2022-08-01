const pool = require('../db/connect') ;

/**
 * @typedef {*} job
 * @property {number} id
 * @property {string} name
 * @property {string} description
 */

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
        },

        async deleteJobProject (projectId, jobId) {
            console.log(projectId,jobId);
            const sql ='DELETE FROM public.project_has_job WHERE project_id=$1 AND job_id=$2';
            try {
                await pool.query(sql,[projectId,jobId]);
            } catch (error) {
                console.error(error);
            };
        },

        async addJobUser (customerId, jobId) {
            console.log(customerId,jobId);
            
            const sql ='UPDATE public.customer SET job_id=$1 where public.customer.id=$2';
            try {
                await pool.query(sql,[jobId,customerId]);
            } catch (error) {
                console.error(error);
            };
        },

        async deleteJobUser (customerId) {
            const sql =`UPDATE public.customer SET job_id=null WHERE public.customer.id=$1`;
            try {
                await pool.query(sql,[customerId]);
            } catch (error) {
                console.error(error);
            };
        },




    };

module.exports = jobDatamapper ;