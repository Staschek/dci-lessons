/* https://www.youtube.com/watch?v=L72fhGm1tfE&feature=share */

//Step 1
const dotenv = require('dotenv').config();
const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const members = require('./members.js');
const exphbs = require('express-handlebars');
const logger = require('./logger');

const app = express();

//handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json()); //to parse the request body  'Raw json'
app.use(express.urlencoded({ extended: false })); //to parse the request URL: [Option] : {extended : false}

//Homepage routes
app.get('/', (req, res) => res.render('index', { title: 'Member App' }));

app.use(express.static('public'));

//Use ur middleware function
app.use(logger);

app.use('/api/members/', require('./routes/api/members'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`App is listening to the port ${PORT}`));
