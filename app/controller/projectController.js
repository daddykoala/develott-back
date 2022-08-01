const projectDatamapper = require ('../datamapper/projectDatamapper');



const projectController ={
    async fetchAllProject(_,res) {
        try {
            const result = await projectDatamapper.allProject();
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },
    
    async fetchOneProject(req, res){

        const projectId = parseInt(req.params.id, 10);

        try {
            const result = await projectDatamapper.oneProject(projectId);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },

    async oneProjectByCustomerConnected(req, res){

        const projectId = req.params.id;

        try {
            const result = await projectDatamapper.oneProjectByCustomerConnected(projectId);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },
    
    async creatProject (req, res) {
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
            return res.json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },


    async deleteProject (req, res) {

        const projectId = parseInt(req.params.id, 10);

        try {
            const result = await projectDatamapper.destroy(projectId);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },

    async updateProject(req, res) {
		const body = req.body;
		const projectId = req.params.id;
		try {
			const result = await projectDatamapper.update(body, projectId);
			if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
	},

    async fetchAllProjectHome(_,res) {
        try {
            const result = await projectDatamapper.allProjectLink();
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists !"});
            };
            return res.json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    },
};
module.exports = projectController ;