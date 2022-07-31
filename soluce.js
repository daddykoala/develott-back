const client = require('../database');

// Tips pour voir la création d'un table selon postgres : pg_dump -Uoquiz -st level oquiz
class CoreModel {
    #id;

    static table = '';

    constructor(obj) {
        this.#id = obj.id;

        // console.log('CLASS NAME', this.constructor.name);
    }

    getId() {
        return this.#id;
    }

    static async findAll(callback) {
        // On sélectionne pas le mote de passe sauf si c'est un login
        const query = `SELECT * FROM "${this.table}"`;

        try {
            const results = await client.query(query);
            let data = [];

            if (results.rowCount) {
                for (let obj of results.rows) {
                    data.push(new this(obj));
                }
            }

            return callback(null, data);
        } catch (error) {
            console.log(error.message);
        }
    }

    static findOne(id, callback) {
        // Demander Comment on pourrait récupérer le nom de la table.

        // plusieurs solutions : la plus simple ajouter une props tableName sur les models : déjà fait à la méthode précédente :/
        const query = {
            text: `SELECT * FROM "${this.table}" WHERE "id" = $1`,
            values: [id],
        };

        try {
            const res = await client.query(query);
            let data = {};
            if (res.rowCount) {
                data = new this(res.rows[0]);
            }
            return callback(null, data);
        } catch (error) {
            return callback(err.message, null);
        }

    }

    async insert(callback) {


        // Problèmes : les champs de la table, ils varient selon la table : comment rendre ça dynamique ?
        // Hint:  On a toutes les props dans this, à partir de là on a plusieurs soluces;
        // voici la mienne : on formatte une string grace a des tableaux et objets et leurs méthodes
        const props = Object.keys(this);
        const values = Object.values(this);

        const query = {
            text: `INSERT INTO "${this.constructor.table}" (${props.join(
                ', '
            )}) VALUES (${values
                .map((value, index) => `$${index + 1}`)
                .join(', ')})  RETURNING "id"`,
            values: values,
        };

        try {

            const res = await client.query(query);
            let msg = 'Something Wrong Happened';
            if (res.rowCount) {
                msg = null;
                this.id = res.rows[0].id;
            }

            return callback(msg, this);
        } catch (error) {
            callback(err.message, null); // GUARD
        }
    }

    async update(callback) {
        // même truc que précédemment, les clé est valeurs dynamiques
        // et ajouter le champ updated_at, do it here but meh :/
        const props = Object.keys(this);
        props.push('updated_at');
        const values = Object.values(this);
        values.push(new Date());

        // reduce !
        // Ici on formatte une string dynamique pour mettre à jour le nombre de champs nécessaire
        // console logguer sets pour voir
        const sets = props.reduce((acc, curr, i) => {
            // spread à voir selon niveau
            return [...acc, `"${curr}" = $${i + 1}`];
        }, '');


        const query = {
            text: `UPDATE "${
                this.constructor.table
            }" SET ${sets}  WHERE "id" = ${this.getId()} RETURNING "id"`,
            values: values,
        };

        try {
            const res = await client.query(query);
            if (res.rowCount) {
                return callback('Mise à jour OK', this);
            }
        } catch (error) {
            return callback(err.message, null);
        }
    }

    // destroy est préférable a delete, delete est un mot clé JavaScript
    async destroy(callback) {
        const query = {
            text: `DELETE FROM "${this.constructor.table}" WHERE id = $1`,
            values: [this.getId()],
        };

        try {
            const res = client.query(query);
            if (res.rowCount) {
                return callback('Object destroyed', this);
            }

        } catch (error) {
            return callback(error.message, this);
        }

    }
}

module.exports = CoreModel;

/**
	 * 
	 * GET /users
	 * @summary Customer
	 * @description Récupére tout les utilisateurs
	 * @tags Customer
	 * 
	 * @returns {json} 200 - Description Global
	 * @example response - 200 - success response - application/json
	 * {
	 * 
		"id":"1",
		"firstname": "Abraham",
		"lastname":	"Noel",
		"password":	"pTilwRoKc!4hNzLI",
		"email":	"Eubert.Marchand@yahoo.fr",
		"charte":	"true",
		"city":	"Paris",
		"description":	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"profil_picture":	" ",
		"is_active":	"true",
		"validate":	"false",
		"username_gith":	" ",
		"url_github":	" ",
		"url_gitlab":	" ",
		"url_portfolio":	" ",
		"url_linkedin":	" ",
		"job_id":	"1",
		"validation_link":	" ",
		"created_at":	"2022-07-27T13:14:19.711Z",
		"updated_at" :	"2022-07-27T13:14:19.711Z"
		
		"id"	2
		"firstname":	"Renaud",
		"lastname":	"Rolland",
		"password":	"p1rcIm!V8h_BYnc1o",
		"email":	"Anmone.Giraud@gmail.com",
		"charte":"true",
		"city":	"Bordeaux",
		"description":	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"profil_picture":	" ",
		"is_active":	"false",
		"validate":	"false",
		"username_gith":	" ",
		"url_github":	" ",
		"url_gitlab":	" ",
		"url_portfolio":	" ",
		"url_linkedin":	" ",
		"job_id":	"2,
		"validation_link":	" ",
		"created_at": "2022-07-27T13:14:19.711Z",
		"updated_at": "2022-07-27T13:14:19.711Z"
	 * }
		@example response - 400 - Intitulé 01
 	 * {"Error 400": "Demande erroné"}
	 * @return {string} 400 - Description Global
	 * 
	 * @example response - 500 - Intitulé 01
	 * {"Error 500": "le serveur a du mal à répondre"}
	 * @return {string} 500 - Description Global
	 */