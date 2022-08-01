const pool = require("../db/connect")

const roleDatamapper={

    async allRole () {
        sql='SELECT id,name FROM public.role ORDER BY id ASC'

        const result = await pool.query(sql);
        return result.rows
    },

    async addRoleToCustomer (roleId,projectId,customerId) {

        sql ='UPDATE public.customer_has_project_role SET role_id=$1 WHERE project_id=$2 and customer_id=$3';
        values=[roleId,projectId,customerId];
        await pool.query(sql,values)
    }

    
}

module.exports = roleDatamapper;