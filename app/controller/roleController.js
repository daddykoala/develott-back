const roleDatamapper =require('../datamapper/roleDatamapper');

const roleController={

    async getAllRole(_, res) {
    try {
        const result = await roleDatamapper.allRole();
        if (!result){
            throw new MainError('somthing wrong for gell all role', req, res, 404);
        };
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
            console.log(roleId,projectId,customerId);
            const result = await roleDatamapper.addRoleToCustomer(roleId,projectId,customerId);
            if (!result){
                throw new MainError('This role was not adding', req, res, 404);
            };
            return res.status(200).json(result);
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
            if (!result){
                throw new MainError('This role was not adding', req, res, 404);
            };
            return res.status(200).json(result);
        } catch (error) {
        console.error(error);
        };
    },

};

module.exports = roleController ;