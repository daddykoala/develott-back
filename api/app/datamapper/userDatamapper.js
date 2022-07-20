const pool = require('../db/connect');
const { getJobId } = require('./jobDatamapper');

const userDatamapper = {

        async createUser(req, res) {
            console.log(req.body);
            //todo creer la requete imbriquer pour chopper le job_id

            const job_id = getJobId(req.job_name)
            const sql = `INSERT INTO public."user"(
            id, firstname, lastname, password, email, city, description, profil_picture, is_active, username_gith, url_github, url_gitlab, url_portfolio, url_linkedin, job_id, created_at, updated_at)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)`;
            const values = [req.id, req.firtsname, req.lastname, req.password, req.email, req.city, req.description, req.profil_picture, req.is_active, req.username_gith, req.url_github, req.url_gitlab, req.url_portfolio,
                req.url_linkedin, job_id, req.created_at, req.updated_at
            ]

            const result = await pool.query(sql, values);
            res.send('ok');
            },


    

        async foundUser (email, password) {

        const result = await client.query(`SELECT email, password
        FROM public."user" where email = '${email}' and password ='${password}'`)
        console.log(result.rows[0]);
        return result.rows[0]

    }
}







    





module.exports = userDatamapper;