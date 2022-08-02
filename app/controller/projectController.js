const projectDatamapper = require ('../datamapper/projectDatamapper');



const projectController ={
    async fetchAllProject(_,res, next) {
        try {
            const result = await projectDatamapper.allProject();
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.status(200).json(result);

        } catch (error) {
        next(error);
        };
    },
    
    async fetchOneProject(req, res, next){

        const projectId = parseInt(req.params.id, 10);

        try {
            const result = await projectDatamapper.oneProject(projectId);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.status(200).json(result);

        } catch (error) {
        next(error);
        };
    },

    async oneProjectByCustomerConnected(req, res, next){

        const projectId = req.params.id;

        try {
            const result = await projectDatamapper.oneProjectByCustomerConnected(projectId);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.status(200).json(result);

        } catch (error) {
        next(error);
        };
    },
    
    async creatProject (req, res, next) {
        const body = req.body;
        let timestamp = Date.now();
        var date = new Date(timestamp);
        console.log(date);

        try {
            const exist = await projectDatamapper.verif(body.name)
            if(exist){
                throw new Error("Ce nom de projet est déjâ pris.")
            }

            const result = await projectDatamapper.create(body);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.status(200).json(result);

        } catch (error) {
        next(error);
        };
    },


    async deleteProject (req, res, next) {

        const projectId = parseInt(req.params.id, 10);

        try {
            const result = await projectDatamapper.destroy(projectId);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.status(204).json(result);;

        } catch (error) {
        next(error);
        };
    },

    async updateProject(req, res, next) {
		const body = req.body;
		const projectId = req.params.id;
		try {
			const result = await projectDatamapper.update(body, projectId);
			if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.status(200).json(result);

        } catch (error) {
        next(error);
        };
	},

    async fetchAllProjectHome(_,res, next) {
        try {
            const result = await projectDatamapper.allProjectLink();
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.status(200).json(result);

        } catch (error) {
        next(error);
        };
    },
};
module.exports = projectController ;