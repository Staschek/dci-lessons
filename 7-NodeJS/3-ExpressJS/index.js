const express = require('express');
const path = require('path');
const morgan = require('morgan');

//creating an Express Application class /constructoe
const app = express();

const port = 8585;

app.use(morgan('dev'));
app.use(express.static(__dirname));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.use(function (req, res, next) {
  console.log(`Time: ${Date.now()}`);
  next();
});

// app.get('/about', (req, res) => {
//   res.sendFile('/about.html');
// });

// app.get('/schedule', (req, res) => {
//   res.sendFile('/schedule.html');
// });

app.listen(port, () => console.log(`Application is listening to port ${port}`));
