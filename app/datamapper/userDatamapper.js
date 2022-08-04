const pool = require("../db/connect");
const bcrypt = require("bcrypt");

/**
 * @typedef {*} customer
 * @property {number} id
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} password
 * @property {string} email
 * @property {boolean} charte
 * @property {string} city
 * @property {string} description
 * @property {string} profil_picture
 * @property {string} is_active
 * @property {string} validate
 * @property {string} username_gith
 * @property {string} url_github
 * @property {string} url_gitlab
 * @property {string} url_portfolio
 * @property {string} url_linkedin
 * @property {number} job_id
 * @property {string} validation_link
 */

const userDatamapper = {

	async checkUserExist(email){

		const userExist = await pool.query(`SELECT email, password, id
		FROM public."customer" where email = '${email}'`);
		return userExist.rows[0]
	},

	async createUser(req, validationlink, res) {
		//todo creer la requete imbriquer pour chopper le job_id
		//     console.log(req.body);
		//     const job_id = await getJobId(req.job_name)
		//     console.log('lllooo',job_id);
		//todo vérifier que le user n'existe pas deja

		const encryptedPassword = await bcrypt.hash(req.password, 10);
		const sql = `INSERT INTO customer( firstname, lastname, password, email, city, description, profil_picture, username_gith, url_github, url_gitlab, url_portfolio, url_linkedin, validation_link)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)RETURNING id`;

		const values = [
			req.firstname,
			req.lastname,
			encryptedPassword,
			req.email,
			req.city,
			req.description,
			req.profil_picture,
			req.username_gith,
			req.url_github,
			req.url_gitlab,
			req.url_portfolio,
			req.url_linkedin,
			validationlink,
		];

		const result = await pool.query(sql, values);

		return result.rows[0];
	},

	async allUser() {
		const sql = "SELECT * FROM customer";
		try {
			const result = await pool.query(sql);
			return result.rows;
		} catch (error) {
			console.error(error);
		}
	},

	async foundUserById(userId) {
		const sql = "SELECT * FROM public.v_customer WHERE id=$1";
			const result = await pool.query(sql, [userId]);
			return result.rows[0];
	},

	async foundUserBymail(email) {
		console.log(email);

		const sql = `SELECT * FROM public.v_customer WHERE email =$1`;

		try {
			const result = await pool.query(sql,[email]);
			return result.rows[0];
		} catch (error) {
			console.error(error);
		}
	},

	async foundByGithubUsername(username) {
		const sql = `SELECT * FROM customer WHERE username_gith=$1`;

		try {
			const result = await pool.query(sql, [username]);
			return result.rows[0];
		} catch (error) {
			console.error(error);
		}
	},

	async destroy(userId) {
		const sql = `DELETE FROM customer WHERE id=$1`;
		try {
			const result = await pool.query(sql, [userId]);
			return result.rows[0];
		} catch (error) {
			console.error(error);
		}
	},

	async update(body, userId) {
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
			[...values, userId]
		);
		return savedPost.rows[0];
	},

	async verificationLink(id) {
		const result = await pool.query(`SELECT validation_link,email
            FROM public."customer" where id = '${id}'`);
		return result.rows[0];
	},

	async deleteLinkEmail(id) {
		sql = `UPDATE public."customer" SET validation_link =' ' WHERE id=$1`;
		values = id;
		const result = await pool.query(sql, [values]);
		return;
	},

	async updatesStatus(id) {
		console.log(id);
		sql = `UPDATE public."customer" SET validate ='true' WHERE id=$1`;
		values = id;
		const result = await pool.query(sql, [values]);
		console.log("voilivoilou");
		return;
	},

	async updatesValidationLink(validationLink, id) {
		console.log(id);
		sql = `UPDATE public."customer" SET validation_link =$1 WHERE id=$2`;

		const values = [validationLink, id];
		const result = await pool.query(sql, values);

		return;
	},

	async updatePassword(newPassword, id) {
		console.log(newPassword, id);
		const encryptedPassword = await bcrypt.hash(newPassword, 10);

		sql = `UPDATE public."customer" SET password =$1 WHERE id=$2`;
		const values = [encryptedPassword, id];
		const result = await pool.query(sql, values);

		return;
	},

	async pickTechnoHasCustomer(body){
	
		const sql =`INSERT INTO customer_has_techno(customer_id, techno_id) VALUES($1,$2);`;
		const customer_id = body.customer_id;
		const techno_id = body.techno_id;
		values=[customer_id,techno_id];
	try {
		const result = await pool.query(sql, values);
		console.log(result);
		return result.rows[0];
	} catch (error) {
		console.error(error);
	};	
	}
};

module.exports = userDatamapper;