const projectDatamapper = require ('../datamapper/projectDatamapper');

console.log(projectDatamapper, 'youhou')

const projectController ={
    async fetchAllProject(_,res) {
        try {
            const allProject = await projectDatamapper.allProject();
            return res.json(allProject);
        } catch (error) {
            console.error(error);
        }
    }
}
module.exports = projectController ;