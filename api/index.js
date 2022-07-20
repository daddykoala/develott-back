const express = require('express');
const app = express();
const router = require('./app/router/index');
require('./app/service/')

//variable d'environnement
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//test



//app.use(router);
app.use ()







app.listen(3000, () => {console.log('Server running on http://localhost3000')});