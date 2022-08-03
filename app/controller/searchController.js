const { date } = require('joi');
const searchDatamapper = require('../datamapper/searchDatamapper');
const MainError = require ('../error/customError');

const searchController={

    async searchFilter(req,res) {
        try {
            const body = req.body;
            const result = await searchDatamapper.searchFilter(body);
            if (result === null || result === undefined){
                return res.status(404).json({ message: "This project does not exists try with other filter !"});
            };
            return res.status(200).json(result);

        } catch (error) {
            console.error(error);
        };
    },

    async fetchAllProjectByAsc(req,res) {
        try {
            const startDate =req.body.startDate
            const result = await searchDatamapper.projectsByAsc(startDate);
            if(!startDate){
                res.status(204).json({message:"il n'y a pas de projets prevu à partir de cette date "})
            }
            return res.json(result)
        } catch (error) {
            console.error(error);
        }
    },

    async fetchAllProjectByDesc(req,res) {
        try {
            const endDate = req.body.endDate
            if(!endDate){
                res.status(204).json({message:"il n'y a pas de projets prevu à partir de cette date "})
            }
            const result = await searchDatamapper.projectsByAsc(endDate);
        } catch (error) {
            console.error(error);
        }
        return result.rows
    },

    async fetchAllProjectBetweenDate(req,res) {
        try {
            const endDate = req.body.endDate
            if(!endDate){
                res.status(204).json({message:"il n'y a pas de projets prevu à partir de cette date "})
            }
            const result = await searchDatamapper.projectsByDesc(endDate);
            return res.status(200).json(result);
        } catch (error) {
            console.error(error);
        }
        return result.rows
    },

}

module.exports = searchController;