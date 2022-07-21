const express = require('express');
const app = express();
const router = require('./app/router/index');
const cors = require ('cors');
const corsOptions = require('./app/service/corsOptions')
//documentation API
const expressJsDocSwagger = require('express-jsdoc-swagger');
const { options } = require('./app/service/optionDocSwagger');

//receptionner le cookies
const cookieParser = require("cookie-parser");


//variable d'environnement
require('dotenv').config();
expressJsDocSwagger(app)(options)
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(cors(corsOptions));

//test



app.use(router);








app.listen(3001, () => {console.log('Server running on http://localhost:3001/api-docs')});