const pool = require('../db/connect');
const bcrypt = require('bcrypt');
const { getJobId } = require('./jobDatamapper');


const userDatamapper = {

        async createUser(req,validationlink, res) {
        //todo creer la requete imbriquer pour chopper le job_id
        //     console.log(req.body);
        //     const job_id = await getJobId(req.job_name)
        //     console.log('lllooo',job_id);
        //todo vérifier que le user n'existe pas deja 
        
        const userExist = await pool.query(`SELECT email, password, id
        FROM public."user" where email = '${req.email}'`)
        
        
        if  (userExist.email === req.email ) {
          res.status(401).send("un utilisateur est déjâ enregistré avec cet email");
            return;
            }
            const encryptedPassword = (await bcrypt.hash(req.password,10));
            

            const sql = `INSERT INTO public.user( firstname, lastname, password, email, city, description, profil_picture, username_gith, url_github, url_gitlab, url_portfolio, url_linkedin, validationlink)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`;

            const values = [req.firstname, req.lastname, encryptedPassword, req.email, req.city, req.description, req.profil_picture, req.username_gith, req.url_github, req.url_gitlab, req.url_portfolio,
                req.url_linkedin, validationlink]

            const result = await pool.query(sql, values);
            
            return result
        },

        async allUser (){
        const sql = 'SELECT * FROM public.user'
        try {
            const result = await pool.query(sql);
            return result.rows;
        } catch (error) {
            console.error(error);
        };
        },

        async foundUserById (userId){
        const sql = 'SELECT * FROM public.user WHERE id=$1'
        try {
            const result = await pool.query(sql, [userId]);
            return result.rows[0];
        } catch (error) {
            console.error(error);
        };
        },

        async foundUserBymail (email) {

        const result = await pool.query(`SELECT *

        FROM public."user" where email = '${email}'`)
        
        return result.rows[0]

        },

        async destroy (userId){
        const sql = `DELETE FROM public.user WHERE id=$1`
        try {
            const result = await pool.query(sql, [userId]);
            return result.rows[0];
        } catch (error) {
            console.error(error);
        };
           
        },
        
        async update (body){
            try {
                const sql = `UPDATE public.user SET (firstname, lastname, password, email, city, description, profil_picture, username_gith, url_github, url_gitlab, url_portfolio, url_linkedin)
                VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`;
                body = {
                    
                }
                const result = await pool.query(sql, values);
                return result.rows[0];
            } catch (error) {
                console.error(error);
            }
        },

        async verificationLink (id) {
            
            const result = await pool.query(`SELECT validationlink,email
    
            FROM public."user" where id = '${id}'`)
            console.log(result.rows[0]);
            return result.rows[0]
        },
            
    

        async deleteLinkEmail (userEmail) {

            sql=`DELETE validationlink FROM public.user WHERE email=$1 `;
            values=userEmail;

            const result = await pool.query(sql,[values]);
            console.log(result.rows,"4");
            return result.rows
        },

        async updatesStatus (userEmail) {

            sql=`SELECT email,verificationlink FROM public.user WHERE email=$1 AND verificationlink = $2`;
            values=userEmail,userVerificationLink;

            const result = await pool.query(sql,[values]);
            console.log(result.rows,"6");

            return result.rows
        },


};

module.exports = userDatamapper;