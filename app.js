var express = require('express');
var bodyParser = require('body-parser')
var demoRoute = require('./routes/demo');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/demo', demoRoute);

app.listen(1132);
