const express = require('express');
const path = require('path');
const port = 9000;

const app = express();

app.use('/',require('./routes'));

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));