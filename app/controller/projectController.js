const projectDatamapper = require ('../datamapper/projectDatamapper');



const projectController ={
    async fetchAllProject(_,res) {
        try {
            const allProject = await projectDatamapper.allProject();
            return res.json(allProject);
        } catch (error) {
            console.error(error);
        }
    },
    
    async fetchOneProject(req, res){

        const projectId = req.body.id;

        try {
            const oneProject = await projectDatamapper.oneProject(projectId);
            return res.json(oneProject)
        } catch (error) {
            console.error(error);
        };
    },
    
    async creatProject (req, res) {
        const body = req.body
        try {
            const create = await projectDatamapper.create(body);
            return res.json(create);
        } catch (error) {
            console.error(error);
        };
    },

    async deleteProject (req, res) {

        const projectId = req.body.id;

        try {
            const destroy = await projectDatamapper.destroy(projectId);
            return res.json(destroy);
        } catch (error) {
            console.error(error);
        };
    }
};
module.exports = projectController ;