const path = require('path')
const express = require('express');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000

const route = require('./routes');
const db = require('./config/db');

//bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//connect db

db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//HTPP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs',handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource','views'));

//reute init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
