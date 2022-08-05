const pool = require('../db/connect') ;

/**
 * @typedef {*} job
 * @property {number} id
 * @property {string} name
 * @property {string} description
 */

const jobDatamapper = {
    //middleware pour recuperer l'id du job
        async AllJob() {
            sql='SELECT job.id as id, job.name FROM public.job ';
            try {
                const result=await pool.query(sql);
                return result.rows
            } catch (error) {
                console.error(error);
            };
        },



        async getJobId (jobName, res){
            sql = `SELECT id FROM PUBLIC.JOB WHERE name = '${jobName}'`
            try {
                const result = await pool.query(sql);
                return result.rows[0];
            } catch (error) {
                console.error(error);
            };
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

        async deleteJobProject (id) {
            const sql ='DELETE FROM public.project_has_job WHERE id=$1';
            try {
                const result = await pool.query(sql,[id]);
                return result.rows[0];
            } catch (error) {
                console.error(error);
            };
        },

        async addJobUser (customerId, jobId) {
            const sql ='UPDATE public.customer SET job_id=$1 where public.customer.id=$2';
            try {
                const result = await pool.query(sql,[jobId,customerId]);
                return result.rows[0];
            } catch (error) {
                console.error(error);
            };
        },

        async deleteJobUser (customerId) {
            const sql =`UPDATE public.customer SET job_id=null WHERE public.customer.id=$1`;
            try {
                const result = await pool.query(sql,[customerId]);
                return result.rows[0];
            } catch (error) {
                console.error(error);
            };
        },
    };

module.exports = jobDatamapper ;