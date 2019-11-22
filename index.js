const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const http = require('http'); 
const express = require('express');
const https = require('https');
const GoogleStrategy = require('passport-google-oauth20');
const authRoutes = require('./routes/auth-routes');
const passportInit = require('./config/passport-init');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const shell = require('shelljs');

const app = express();
const port = 8080;

shell.cd('/home/runner/views/');
var lstest = shell.ls('');
console.log(lstest);
shell.ln('/home/runner/views/main.html', '/home/runner/views/main.ejs');


//view engine
app.set('view engine', 'ejs');

//setup routes
app.use('/auth', authRoutes);

//render de homepage
app.get('/', function(req, res) { 
  res.render('main.ejs');
});

app.use(express.static('www'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

//verbind met mongoDB
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('verbonden met mongooldb');
});
