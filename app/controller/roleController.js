const roleDatamapper =require('../datamapper/roleDatamapper');

const roleController={

    async getAllRole(req,res) {
    
        const result = await roleDatamapper.allRole();
        return res.json(result)
    
    },

    async addRoleCustomer (req,res) {

        const roleId =req.body.role_id;
        const projectId=req.params.id;
        const customerId=req.body.customer_id;
        console.log(roleId,projectId,customerId);

        const result = await roleDatamapper.addRoleToCustomer(roleId,projectId,customerId);
        return res.json(result)
    },
    /**
     * permet a un customer de postuler 
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async addRoleToproject (req,res) {

        const projectId=req.params.id;
        const customerId=req.body.customer_id;
        const roleId=req.body.role_id
        console.log(projectId,customerId);

        const result = await roleDatamapper.addRoleToproject(customerId,roleId,projectId);
        return res.json(result)
    },

    
        


}



module.exports = roleController ;