const pool = require('../db/connect')

const searchController={

    async searchFilter(body) {

        const fields =[];
        const values =[];
        console.log(Object.entries(body));


        Object.entries(body).forEach(([key,value],index) => {

            if(["technoId"].includes(key)) {
                fields.push(` project_has_techno.techno_id=$${index+1}`);
                values.push(value);
            }
            if(["jobId"].includes(key)) {
                fields.push(` project_has_job.job_id=$${index+1}`);
                values.push(value);
            }
            if(["start_date"].includes(key)) {
                fields.push(` project_has_techno.techno_id=$${index+1}`);
                values.push(value);
            }
            console.log(fields.join(" AND"));
            console.log(values);
        });

        const sql={
            text :`SELECT project.id as projectId , JSON_AGG(distinct project_has_techno.techno_id) as technoId , JSON_AGG(distinct project_has_job.job_id)as jobId,
        start_date
        from project
        
        join project_has_techno on project_id =project.id
        
        join project_has_job on project_has_job.project_id = project.id
        
        WHERE ${fields.join(" OR")} 
        GROUP BY projectId
        order by start_date DESC`,
        values}
        console.log(sql);

        const result = await pool.query(sql)
        return result
    }   




}

module.exports = searchController ;