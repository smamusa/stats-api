const matlab = require('express').Router();

matlab.use('/answers', require('./answers'));
matlab.use('/fileexchange', require('./fileExchange'));
matlab.use('/cody', require('./cody'));

module.exports = matlab;
