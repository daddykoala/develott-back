const pool = require('../db/connect') ;

const technoDatamapper = {
    //middleware pour recuperer l'id du job
        async getTechnoId (technoName, res){
            console.log(technoName);
            const result = await pool.query(`SELECT id FROM PUBLIC.techno WHERE name = '${technoName}'`);
            console.log(result.rows[0]);
            return result.rows[0];
         },

         async addTechnoProject (projectId, technoId) {
            const sql ='INSERT INTO public.project_has_techno (project_id, techno_id)VALUES($1,$2)';
            try {
                await pool.query(sql,[projectId,technoId]);
            } catch (error) {
                console.error(error);
            };
        },

        async deleteTechnoProject (projectId, technoId) {
            const sql ='DELETE FROM public.project_has_techno WHERE project_id=$1 AND techno_id=$2';
            try {
                await pool.query(sql,[projectId,technoId]);
            } catch (error) {
                console.error(error);
            };
        },

        async addTechnoUser (customerId, technoId) {
            console.log(customerId,technoId);
            
            const sql ='INSERT INTO public.customer_has_techno (customer_id, techno_id)VALUES($1,$2)';
            try {
                await pool.query(sql,[customerId,technoId]);
            } catch (error) {
                console.error(error);
            };
        },

        async deleteTechnoUser (projectId, technoId) {
            const sql ='DELETE FROM public.customer_has_techno WHERE customer_id=$1 AND techno_id=$2';
            try {
                await pool.query(sql,[projectId,technoId]);
            } catch (error) {
                console.error(error);
            };
        },

    };

module.exports = technoDatamapper ;