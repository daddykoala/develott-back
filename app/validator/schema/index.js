const createUser =require ('./create_user');
const updateUser =require ('./update_user');
const createProject =require ('./create_project');
const updateProject =require ('./update_project');
const updatePassword =require ('./update_password');

module.exports = {
    createProject,
    updateUser,
    createUser,
    updateProject,
    updatePassword
}