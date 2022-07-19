const client = require('./dbclient') ;

const userDatamapper ={

    async createUser ( req, res) {

        const sql =



    },

    async foundUser ( email, password) {
       
        const result = await client.query (`SELECT email, password
        FROM public."user" where email = '${email}' and password ='${password}'`)
        console.log(result.rows[0]);
        return result.rows[0]
        
    }
}
        


            

module.exports = userDatamapper ;