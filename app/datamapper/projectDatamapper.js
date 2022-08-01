const pool = require('../db/connect');

/**
 * @typedef {*} project
 * @property {number} id
 * @property {string} name
 * @property {string} exerpt
 * @property {string} description
 * @property {string} picture_project
 * @property {number} start_date
 * @property {number} end_date
 * @property {string} url_slack_server
 * @property {string} url_github_repo
 * @property {string} url_github_projet
 * @property {string} url_trello
 */

const projectDatamapper = {

    async allProject (){
        const sql = 'SELECT id, project, excerpt, picture, start_date, techno, role_id, firstname, lastname, c_profil_picture FROM public.v_project;';
        const sql2 ='SELECT * FROM public.v_project_has_job'


        try {
            const result = await pool.query(sql);
            const project=result.rows


            const result2 = await pool.query(sql2);
            const jobByProject=result.rows

            return { project,jobByProject };
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
        const sql3 =`SELECT job, id_project_has_job, job_id, project_id FROM public.v_project_has_job WHERE project_id=$1`

        try {
            const result = await pool.query(sql,[projectId]);
            const project = result.rows[0];


            const result2 = await pool.query(sql2,[projectId]);
            const teams = result2.rows;

            const result3 = await pool.query(sql3,[projectId]);
            const jobByProject = result3.rows;

        return {project,teams,jobByProject};
        } catch (error) {
            console.error(error);
        };
    },

    async allProjectLink (){
        const sql = 'SELECT id, project, excerpt, picture, start_date, techno, role_id, firstname, lastname, c_profil_picture FROM public.v_project';
        const sql2='SELECT customer_id, role_id, project_id, role, firstname, lastname, job_id, job, techno_name FROM public.v_equipe';
        const sql3 ='SELECT * FROM public.v_project_has_job'

        try {
        const result = await pool.query(sql);
        const projects = result.rows;

        const result2 = await pool.query(sql2);
        const teams = result2.rows;

        const result3 = await pool.query(sql3);
        const jobByProject=result3.rows
            

        return {projects,teams,jobByProject};
        } catch (error) {
        console.error(error);
        };
    },

    async create (body){
        const sql =  `INSERT INTO project (name, exerpt, description,picture_project, start_date, end_date)VALUES($1, $2, $3, $4, $5,$6 )`;
        body = { 
            name : body.name,
            exerpt : body.exerpt,
            description : body.description,
            picture_project: body.picture_project,
            start_date : body.start_date,
            end_date : body.end_date
        };
        try {
        const result = await pool.query(sql, [body.name, body.exerpt, body.description, body.start_date, body.end_date]);
        await pool.query('INSERT INTO customer_has_project_role (customer_id,project')
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