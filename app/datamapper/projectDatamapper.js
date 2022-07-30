const pool = require('../db/connect');



const projectDatamapper = {

    async allProject (){
        const sql = 'SELECT id, project, excerpt, picture, start_date, techno, job, role_id, firstname, lastname, c_profil_picture FROM public.v_project;';
        try {
            const result = await pool.query(sql);
            return result.rows;
        } catch (error) {
            console.error(error);
        };
        },

        async oneProject(projectId){
        const sql = 'SELECT * FROM project WHERE id=$1';
        try {
            const result = await pool.query(sql, [projectId]);
            return result.rows[0];
        } catch (error) {
            console.error(error);
        };
    },

    async oneProjectByCustomerConnected(projectId){

        const sql = `SELECT * FROM public.v_project WHERE id=$1`;
        const sql2 =`SELECT customer_id, role_id, project_id, role, firstname, lastname, job_id, job, techno_name FROM public.v_equipe where project_id=$1`;
        try {
            const result = await pool.query(sql,[projectId]);
            const project = result.rows[0];


            const result2 = await pool.query(sql2,[projectId]);
            const teams = result2.rows;

        return {project,teams};
        } catch (error) {
            console.error(error);
        };
    },

    async allProjectLink (){
        const sql = 'SELECT id, project, excerpt, picture, start_date, techno, job, role_id, firstname, lastname, c_profil_picture FROM public.v_project';
        const sql2='SELECT customer_id, role_id, project_id, role, firstname, lastname, job_id, job, techno_name FROM public.v_equipe';
        try {
        const result = await pool.query(sql);
        const projects = result.rows;

        const result2 = await pool.query(sql2);
        const teams = result2.rows;

        return {projects,teams};
        } catch (error) {
        console.error(error);
        };
    },

    async create (body){
        const sql =  `INSERT INTO project (name, exerpt, description, start_date, end_date)VALUES($1, $2, $3, $4, $5)`;
        body = { 
            name : body.name,
            exerpt : body.exerpt,
            description : body.description,
            start_date : body.start_date,
            end_date : body.end_date
        };
        try {
        const result = await pool.query(sql, [body.name, body.exerpt, body.description, body.start_date, body.end_date]);
        return result.rows[0];
        } catch (error) {
        console.error(error);
        };
    },

    async destroy (projectID){
        const sql = `DELETE FROM project WHERE id=$1`;
        try {
        const result = await pool.query(sql, [projectID]);
        return result.rows[0];
        } catch (error) {
        console.error(error);
        };
    },

    async update(body,id) {


		const fields = Object.keys(body).map(
			(prop, index) => `"${prop}" = $${index + 1}`
		);
		const values = Object.values(body);
		const savedPost = await pool.query(
			`
                    UPDATE project SET
                        ${fields}
                    WHERE id = ${id}
                    RETURNING *
                `,
			[...values]
		);
		return savedPost.rows[0];
	},


};

module.exports = projectDatamapper;