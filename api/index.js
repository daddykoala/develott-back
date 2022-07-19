const express = require('express');
const app = express();
const router = require('./router');

//variable d'environnement
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.use(router);







app.listen(3000, () => {console.log('Server running on http://localhost3000')});