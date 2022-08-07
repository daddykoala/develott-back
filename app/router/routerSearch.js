const searchController = require('../controller/searchController');
const express = require("express");
const searchRouter = express.Router();

searchRouter.get('/search/projects',searchController.searchFilter);
searchRouter.get("/search/projectsbyasc",searchController.fetchAllProjectByAsc);
searchRouter.get("/search/projectsbydesc",searchController.fetchAllProjectByDesc);


module.exports = searchRouter ;