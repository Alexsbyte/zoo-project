const express = require('express');
const serverConfig = require('./config/serverConfig');
const indexRouter = require('./routes/indexRout.routes')
  
const app = express()
serverConfig(app)
app.use('/', indexRouter)

module.exports = app;