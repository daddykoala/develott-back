const pool = require('../db/connect');



const projectDatamapper = {

    async allProject (){
    try {
        const result = await pool.query('SELECT * FROM project');
        return result.rows;
    } catch (error) {
        console.error(error);
    }
    },

    async oneProject(projectID){
    try {
        const result = await pool.query('SELECT * FROM project WHERRE id=$1', [projectID]);
        return result.rows[0];
    } catch (error) {
        console.error(error);
    }
    },

    async create (body){
    try {
        
        const sql= `INSERT INTO project (name, exerpt, description, start_date, end_date)VALUES($1, $2, $3, $4, $5)`
        body = { 
            name : body.route,
            exerpt : body.exerpt,
            description : body.description,
            start_date : body.start_date,
            end_date : body.end_date
        };
        const result = await client.query(sql, [body.name, body.exerpt, body.description, body.start_date, body.end_date]);
        return result.row;
    } catch (error) {
        console.error(error);
    }
    },

    async destroy (projectID){
    try {
        const result = await pool.query(`DELETE FROM project WHERE id=$1`, [projectID]);
        return result.rows[0];
    } catch (error) {
        console.error(error);
    };
    },

    async update ()

//     const savedPost = await client.query(
            
//         UPDATE post SET
//             ${fields}
//         WHERE id = $${fields.length + 1}
//         RETURNING *
//     ,
//     [...values, id],
// );
};

module.exports = projectDatamapper;