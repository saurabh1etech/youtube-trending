const express = require('express');
const app = express();
const cors = require('cors');

//Routers
const testRouter = require('./routes/ytRoutes');

app.use(cors({ origin: 'http://localhost:4200' }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  //* will allow from all cross domain
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});


//Middlewares
app.use('/api/v1/yt', testRouter);

module.exports = app;




