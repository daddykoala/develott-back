const express = require('express');
const app = express();
const dotenv = require ('dotenv')
const router = require('./app/router/index');
const cors = require ('cors');
const corsOptions = require('./app/service/corsOptions')
const path = require('path');
//documentation API
const expressJsDocSwagger = require('express-jsdoc-swagger');
const { options } = require('./app/service/optionDocSwagger');

//receptionner le cookies
const cookieParser = require("cookie-parser");


//variable d'environnement
const dotenvPath= path.resolve("/.env");
dotenv.config({path:dotenvPath});
expressJsDocSwagger(app)(options)
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(cors(corsOptions));

//test

app.use(router);

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.listen(SERVER_PORT, () => {console.log(`Server running on http://localhost:${SERVER_PORT}`)});


// app.listen(SERVER_PORT, () => {console.log('Server running on http://localhost:3001/api-docs')});