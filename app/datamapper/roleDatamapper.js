const pool = require("../db/connect")

const roleDatamapper={

    async allRole () {
        sql='SELECT id,name FROM public.role ORDER BY id ASC';
        try {
            const result = await pool.query(sql);
            return result.rows;
        } catch (error) {
            console.error(error);
        };
    },
//valide un postulant en participant
    async addRoleToCustomer (roleId,projectId,customerId) {
        sql ='UPDATE public.customer_has_project_role SET role_id=$1 WHERE project_id=$2 and customer_id=$3';
        try {
            values=[roleId,projectId,customerId];
            await pool.query(sql,values);
        } catch (error) {
            console.error(error);
        };
    },

//postule a un projet 
    async addRoleToproject (customerId,roleId,projectId) {
        sql ='INSERT INTO public.customer_has_project_role(customer_id, role_id, project_id)VALUES ($1, $2, $3)';
        try {
            values=[customerId,roleId,projectId];
            await pool.query(sql,values);
        } catch (error) {
            console.error(error);
        };
    },

//retirer 

    async deleteRoleToCustomer (customerId,roleId,projectId,res) {
        sql ='DELETE FROM customer_has_project_role WHERE customer_id=$1 AND role_id=$2 AND project_id =$3 ';
        try {
            values=[customerId,roleId,projectId];
            await pool.query(sql,values);
        } catch (error) {
            console.error(error);
        };
    },
};

module.exports = roleDatamapper;