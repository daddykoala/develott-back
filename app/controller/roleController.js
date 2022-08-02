const roleDatamapper =require('../datamapper/roleDatamapper');

const roleController={

    async getAllRole(_, res, next) {
    try {
        const result = await roleDatamapper.allRole();
        if (result === null || result === undefined){
            return res.status(404).json({ message: "This role does not exists !"});
        };
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Database Error", error: error});
    };
    
    },

    async addRoleCustomer (req, res, next) {
        try {
            const roleId =req.body.role_id;
            const projectId=req.params.id;
            const customerId=req.body.customer_id;
            console.log(roleId,projectId,customerId);
            const result = await roleDatamapper.addRoleToCustomer(roleId,projectId,customerId);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This role does not exists !"});
            };
            return res.status(204).json(result);

        } catch (error) {
        next(error);
        };
    },
    /**
     * permet a un customer de postuler 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async addRoleToproject (req, res, next) {
        try {
            const projectId=req.params.id;
            const customerId=req.body.customer_id;
            const roleId=req.body.role_id
            console.log(projectId,customerId);
            const result = await roleDatamapper.addRoleToproject(customerId,roleId,projectId);

            if (result === null || result === undefined){
                return res.status(404).json({ message: "This role does not exists !"});
            };
            return res.status(204).json(result);
        } catch (error) {
        next(error);
        };
    },

};

module.exports = roleController ;