const pool = require('../db/connect');



const projectDatamapper = {

    async allProject (){
    const sql = 'SELECT * FROM project'
    try {
        const result = await pool.query(sql);
        return result.rows;
    } catch (error) {
        console.error(error);
    }
    },

    async oneProject(projectId){
    const sql = 'SELECT * FROM project WHERE id=$1'
    try {
        const result = await pool.query(sql, [projectId]);
        return result.rows[0];
    } catch (error) {
        console.error(error);
    }
    },

    async oneProjectByCustomerConnected(projectId){
        console.log(projectId);
        const sql = 'SELECT  name, description, picture_project, start_date, end_date, firstname, lastname, pseudo_github, url_github, url_gitlab, url_portfolio, url_linkedin, job, techno FROM public.project left join(select array_agg(project_has_techno.techno_id),project_has_techno.project_id,array_agg(techno.name)as techno from project_has_techno join techno on project_has_techno.techno_id = techno.id group by project_has_techno.project_id) as ph_techno on ph_techno.project_id = project.id left join(select array_agg(project_has_job.job_id),project_has_job.project_id,array_agg(job.name)as job from project_has_job join job on project_has_job.job_id = job.id group by project_has_job.project_id) as ph_job on ph_job.project_id = project.id left join( select customer_has_project_role.role_id as role_id , customer_has_project_role.project_id as project_id , role.name as role , customer_admin.firstname as firstname ,customer_admin.lastname as lastname , customer_admin.profil_picture as c_profil_picture ,customer_admin.username_gith as pseudo_github, customer_admin.url_github as url_github, customer_admin.url_gitlab as url_gitlab, customer_admin.url_portfolio as url_portfolio, customer_admin.url_linkedin as url_linkedin from customer_has_project_role join role on customer_has_project_role.role_id = role.id join (select id, firstname, lastname, profil_picture ,username_gith, url_github, url_gitlab, url_portfolio, url_linkedin FROM public.customer)as customer_admin on customer_id = customer_admin.id where role_id =1 ) as r_customer on r_customer.project_id=project.id where project.id=$1'
        try {
            const result = await pool.query(sql, [projectId]);
            return result.rows[0];
        } catch (error) {
            console.error(error);
        }
        },

    async allProjectLink (){
        const sql = 'select project.name as project ,project.exerpt as excerpt ,project.picture_project as picture ,project.start_date, techno , job , role_id , firstname , lastname , c_profil_picture from project left join(select array_agg(project_has_techno.techno_id),project_has_techno.project_id,array_agg(techno.name)as techno from project_has_techno join techno on project_has_techno.techno_id = techno.id group by project_has_techno.project_id) as ph_techno on ph_techno.project_id = project.id left join(select array_agg(project_has_job.job_id),project_has_job.project_id,array_agg(job.name)as job from project_has_job join job on project_has_job.job_id = job.id group by project_has_job.project_id) as ph_job on ph_job.project_id = project.id left join( select customer_has_project_role.role_id as role_id , customer_has_project_role.project_id as project_id , role.name as role , customer_admin.firstname as firstname ,customer_admin.lastname as lastname , customer_admin.profil_picture as c_profil_picture from customer_has_project_role join role on customer_has_project_role.role_id = role.id join (select id, firstname, lastname, profil_picture FROM public.customer)as customer_admin on customer_id = customer_admin.id where role_id =1 ) as r_customer on r_customer.project_id=project.id '
        
    try {
        const result = await pool.query(sql);
        console.log('ICI');
        return result.rows;
    } catch (error) {
        console.error(error);
    }
    },

    async create (body){
        const sql =  `INSERT INTO project (name, exerpt, description, start_date, end_date)VALUES($1, $2, $3, $4, $5)`
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
    }
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

    async update(body, projectId) {
		const fields = Object.keys(body).map(
			(prop, index) => `"${prop}" = $${index + 1}`
		);
		const values = Object.values(body);
		const savedPost = await pool.query(
			`
                    UPDATE customer SET
                        ${fields}
                    WHERE id = $${fields.length + 1}
                    RETURNING *
                `,
			[...values, projectId]
		);
		return savedPost.rows[0];
	},


};

module.exports = projectDatamapper;