const express = require('express');

const port = 9000;

const db = require('./config/db');

const session = require('express-session');

const passport = require('./config/passport');

const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded());

app.use(express.static('public'));

app.use(session({
    secret: 'adminpanel',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));

app.use(passport.initialize());

app.use(passport.session());

app.use('/', require('./routes/adminRoutes'));

app.listen(port,(err) => {

    if(err){
        console.log("Error to Start Server......");
    }
    else{
        console.log(`Server running at http://localhost:${port}`);
    }

});