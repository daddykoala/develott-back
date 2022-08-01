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
    
    async addRoleToproject (req,res) {

        const projectId=req.params.id;
        const customerId=req.body.customer_id;
        console.log(projectId,customerId);

        const result = await roleDatamapper.addRoleToproject(customerId,projectId);
        return res.json(result)
    },
        


}



module.exports = roleController ;