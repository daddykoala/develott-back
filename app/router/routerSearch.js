const searchController = require('../controller/searchController');
const express = require("express");
const searchRouter = express.Router();

searchRouter.get('/search/projects',searchController.searchFilter)

module.exports = searchRouter ;