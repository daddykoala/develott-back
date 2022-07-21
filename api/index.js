const express = require('express');
const app = express();
const router = require('./app/router/index');
const cors = require ('cors');
const cookieParser = require("cookie-parser")


//variable d'environnement
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser())
app.use(cors())

//test



app.use(router);








app.listen(3001, () => {console.log('Server running on http://localhost3001')});