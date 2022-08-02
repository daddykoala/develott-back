const searchDatamapper = require('../datamapper/searchDatamapper');

const searchController={

    async searchFilter(req,res) {

        const body = req.body;

        try {
            const result = await searchDatamapper.searchFilter(body);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists try with other filter !"});
            };
            return res.status(200).json(result);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Database Error", error: error});
        };
    }
}

module.exports = searchController;