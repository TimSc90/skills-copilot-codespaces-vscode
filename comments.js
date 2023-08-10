// Create web server
// Run: node comments.js
// Access: http://localhost:3000

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

// Set up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up the static files
app.use(express.static(path.join(__dirname, 'public')));

// Set up the routes
app.use('/', require('./routes/index'));
app.use('/comments', require('./routes/comments'));

// Set up the server
app.listen(3000, function() {
	console.log('Server is running on port 3000...');
});