const projectDatamapper = require ('../datamapper/projectDatamapper');
const MainError = require ('../error/customError');


const projectController ={
    async fetchAllProject(_,res) {
        try {
            const result = await projectDatamapper.allProject();
            if (!result){
                throw new MainError('can\'t get all project', req, res, 404);
            };
            return res.status(200).json(result);
        } catch (error) {
        console.error(error);
        };
    },
    
    async fetchOneProject(req, res){
        try {
            const projectId = parseInt(req.params.id, 10);
            if (!projectId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const result = await projectDatamapper.oneProject(projectId);
            if (!result){
                throw new MainError('This project does not exists', req, res, 404);
            };
            return res.status(200).json(result);
        } catch (error) {
        console.error(error);
        };
    },

    async oneProjectByCustomerConnected(req, res){
        try {
            const projectId = req.params.id;
            if (!projectId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const result = await projectDatamapper.oneProjectByCustomerConnected(projectId);
            if (!result){
                throw new MainError('This project does not exists', req, res, 404);
            };
            return res.status(200).json(result);
        } catch (error) {
        console.error(error);
        };
    },
    
    async creatProject (req, res) {
        try {
            const body = req.body;
            let timestamp = Date.now();
            var date = new Date(timestamp);
            if (!date){
                throw new MainError('missing parameter', req, res, 400);
            };
            console.log(date);
            const exist = await projectDatamapper.verif(body.name)
            if(exist){
                throw new MainError('This project\'s name  was already taken', req, res, 401);
            }
            const result = await projectDatamapper.create(body);
            if (!result){
                throw new MainError('This project can\'t be created', req, res, 404);
            };
            return res.status(200).json(result);
        } catch (error) {
        console.error(error);
        };
    },


    async deleteProject (req, res) {
        try {
            const projectId = parseInt(req.params.id, 10);
            if (!projectId){
                throw new MainError('missing parameter', req, res, 400);
            };
            const result = await projectDatamapper.destroy(projectId);
            if (!result){
                throw new MainError('This project can\'t be delete', req, res, 404);
            };
            return res.status(204).json(result);;
        } catch (error) {
        console.error(error);
        };
    },

    async updateProject(req, res) {
        try {
            const body = req.body;
            const projectId = req.params.id;
            if (!projectId){
                throw new MainError('missing parameter', req, res, 400);
            };
			const result = await projectDatamapper.update(body, projectId);
			if (!result){
                throw new MainError('This project can\'t be update', req, res, 404);
            };
            return res.status(200).json(result);
        } catch (error) {
        console.error(error);
        };
	},

    async fetchAllProjectHome(_,res) {
        try {
            const result = await projectDatamapper.allProjectLink();
            if (!result){
                throw new MainError('can\'t take all project', req, res, 404);
            };
            return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        };
    }
};
module.exports = projectController ;