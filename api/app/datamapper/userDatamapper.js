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
        console.log(req.email);
        const userExist = await pool.query(`SELECT email, password
        FROM public."user" where email = '${req.email}'`)
        
        console.log(userExist);
        if  (userExist.email === req.email ) {
          res.status(401).send("un utilisateur est déjâ enregistré avec cet email");
            return;
            }
            const encryptedPassword = (await bcrypt.hash(req.password,10));
            

            const sql = `INSERT INTO public.user( firstname, lastname, password, email, city, description, profil_picture, username_gith, url_github, url_gitlab, url_portfolio, url_linkedin)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`;

            const values = [req.firstname, req.lastname, encryptedPassword, req.email, req.city, req.description, req.profil_picture, req.username_gith, req.url_github, req.url_gitlab, req.url_portfolio,
                req.url_linkedin]

            const result = await pool.query(sql, values);
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
        };
           
        },
        
        async update (body,userId){
            
            try {
                const query = {

                    text : `UPDATE public.user SET 
                    "firstname" = $1
                     WHERE id ='${userId}' RETURNING id`,
                    values : [
                    body.firstname
                    ],
                };
                const result = await pool.query(query, userId);
                return result.rows[0];
            } catch (error) {
                console.error(error);
            }
        }


// update() {
//     const query = {
//         text: `UPDATE "user" SET
//             "firstname" = $1,
//             "lastname" = $2,
//             "email" = $3,
//             "password" = $4
//             WHERE id = $5 RETURNING id`,
//         values: [
//             this.firstname,
//             this.lastname,
//             this.email,
//             this.password,
//             this.id,
//         ],
//     };
//     client.query(query, (err, result) => {
//         if (err) {
//             return err;
//         }

//         if (!result.rowCount) {
//             return console.log('Update did not target any rows', this);
//         }

//         // au moins une ligne a été modifié => tout va bien !
//         return console.log(this);
//     });
// }
};

module.exports = userDatamapper;