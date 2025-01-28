const express = require('express')
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const verifyAccessToken = require('../middleware/verifyAccesToken')
const removeHeader = require('../middleware/removeHeader')

const serverConfig = (app) =>{
    app.use(cookieParser())
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({ credentials: true , origin: ['http://localhost:5173']}));
    app.use(verifyAccessToken)
}

module.exports = serverConfig