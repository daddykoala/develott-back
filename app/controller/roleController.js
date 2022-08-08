const roleDatamapper =require('../datamapper/roleDatamapper');
const MainError = require ('../error/customError');

const roleController={

    async getAllRole(_, res) {
    try {
        const result = await roleDatamapper.allRole();
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
    };
    },

    async addRoleCustomer (req, res) {
        try {
            const roleId =req.body.role_id;
            if (!roleId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const projectId=req.params.id;
            if (!projectId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const customerId=req.body.customer_id;
            const result = await roleDatamapper.addRoleToCustomer(roleId,projectId,customerId);
            return res.status(200).json(result);


        } catch (error) {
            console.error(error);
        };
    },

    async deleteRoleCustomer (req,res) {
        try {
            const roleId =req.body.role_id;
            if (!roleId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const projectId=req.params.id;
            if (!projectId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const customerId=req.body.customer_id;
            if (!customerId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const result = await roleDatamapper.deleteRoleToCustomer(customerId,roleId,projectId);
            return res.json({message:"rôle supprimé",status:204});


        } catch (error) {
        console.error(error);
        };
    },
    /**
     * permet a un customer de postuler 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async addRoleToproject (req, res) {
        try {
            const projectId=req.params.id;
            if (!projectId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const customerId=req.body.customer_id;
            if (!customerId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const roleId=req.body.role_id
            console.log(projectId,customerId);
            const result = await roleDatamapper.addRoleToproject(customerId,roleId,projectId);
            return res.status(200).json(result);
        } catch (error) {
        console.error(error);
        };
    },

};

module.exports = roleController ;