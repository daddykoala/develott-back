const pool = require('../db/connect');
const bcrypt = require('bcrypt');
const { getJobId } = require('./jobDatamapper');

const userDatamapper = {

        async createUser(req, res) {
        //todo creer la requete imbriquer pour chopper le job_id
        //     console.log(req.body);
        //     const job_id = await getJobId(req.job_name)
        //     console.log('lllooo',job_id);
        //todo vérifier que le user n'existe pas deja 
        

           //const encryptedPassword = (await bcrypt.hash(req.password,10));
            

            const sql = `INSERT INTO public.user( firstname, lastname, password, email, city, description, profil_picture, username_gith, url_github, url_gitlab, url_portfolio, url_linkedin)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`;

            const values = [req.firstname, req.lastname, req.password, req.email, req.city, req.description, req.profil_picture, req.username_gith, req.url_github, req.url_gitlab, req.url_portfolio,
                req.url_linkedin]

            const result = await pool.query(sql, values);
            
        },
            

            


    

        async foundUser (email, password) {

        const result = await pool.query(`SELECT email, password
        FROM public."user" where email = '${email}' and password ='${password}'`)
        console.log(result.rows[0]);
        return result.rows[0]

    }
}







    





module.exports = userDatamapper;