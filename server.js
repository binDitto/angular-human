// This server.js file is the node server file

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');

// Initialize App, using express framework 
var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Initialize port
var PORT = 8000 || process.env.PORT; 

// Connecting database
var DB = "localhost:27017/angular-human";
mongoose.connect(DB, function(){
    if(err){
        return err;
    }
    else {
        console.log('Successfully connected to ' + DB);
    }
});

// Set view engine
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/client'));

app.listen(PORT, function(){
    console.log('Listening on port ' + PORT);
});

