const pool = require('../db/connect') ;

const jobDatamapper = {
//middleware pour recuperer l'id du job
    async getJobId (jobName){

        await pool.query(`SELECT id FROM PUBLIC.JOB WHERE NAME='${jobName}'`)

    },
}
module.exports = jobDatamapper ;