var express = require('express');
var bodyParser = require('body-parser');

const multer = require('multer');

var Main = require('./routes/main.routes');

var app = express();
var path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(Main);

var port = 8000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
