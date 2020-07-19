const express = require('express');
const cors = require('cors');
const mailRouter = require('./routes/mailRouter');


let app = express();

app.use(cors({
    'allowedHeaders': '*',
    'exposedHeaders': '*',
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/email', mailRouter);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status=404;
    console.log('error 404');
    error.message = 'wrong href';
    next(error);
});

app.use((error, req, res, next) => {
    console.log(error, 'ERROR<<<<<');
 res.status(error.status || 500);
 res.json({
     error: {message: error.message}
    })
});

module.exports = app;