const roleDatamapper =require('../datamapper/roleDatamapper');

const roleController={

    async getAllRole(req,res) {
    
        const result = await roleDatamapper.allRole();
        return res.json(result)
    
    }

//     async addRoleCustomer (roleId,projectId) {


}



module.exports = roleController ;