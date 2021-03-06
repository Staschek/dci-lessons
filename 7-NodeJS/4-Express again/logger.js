const moment = require('moment');

//Create a middleware function
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get('host')}${req.originalUrl}:  Time: ${moment()}`
  );
  next();
};

module.exports = logger;
