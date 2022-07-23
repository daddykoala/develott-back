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
            console.log(email
            );

        const sql = `SELECT * FROM public.user WHERE email = '${email}'`
        try {
            const result = await pool.query(sql)
            return result.rows[0]
        } catch (error) {
            console.error(error);
        }

        },

        async destroy (userId){
        const sql = `DELETE FROM public.user WHERE id=$1`
        try {
            const result = await pool.query(sql, [userId]);
            return result.rows[0];
        } catch (error) {
            console.error(error);
        }
       
        },

        async update(body, userId) {
            console.log(body);
            const fields = Object.keys(body).map((prop, index) => `"${prop}" = $${index + 1}`);
            console.log(fields);
            const values = Object.values(body);
            console.log(values);
            const savedPost = await pool.query(
                `
                    UPDATE public.user SET
                        ${fields}
                    WHERE id = $${fields.length + 1}
                    RETURNING *
                `,
                [...values, userId],
            );
            return savedPost.rows[0];
        },
    

        async verificationLink (id) {
            
            const result = await pool.query(`SELECT validationlink,email
            FROM public."user" where id = '${id}'`);
            return result.rows[0]
        },
    
            
        async deleteLinkEmail (id) {
            

            sql=`UPDATE public."user" SET validationlink =' ' WHERE id=$1`;
            values=id;
            const result = await pool.query(sql,[values]);
            return 
        },


        async updatesStatus (id) {
            console.log(id);
            sql=`UPDATE public."user" SET validate ='true' WHERE id=$1`;
            values=id;
            const result = await pool.query(sql,[values]);
            console.log('voilivoilou')
            return 
        },
    };

module.exports = userDatamapper;

