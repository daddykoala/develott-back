const pool = require('../db/connect') ;

const jobDatamapper = {
//middleware pour recuperer l'id du job
    async getJobId (jobName, res){
        console.log(typeof(jobName));
        console.log(jobName);

        const result = await pool.query(`SELECT id FROM PUBLIC.JOB WHERE name = ${jobName}`);
        console.log(result.rows);
        res.json(result[0])

    },
}

module.exports = jobDatamapper ;