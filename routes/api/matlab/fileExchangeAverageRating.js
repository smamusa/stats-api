const fileExchangeAverageRating = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = import('got');

fileExchangeAverageRating.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload(
        'MATLAB File Exchange Average Rating',
        $('#fileexchange_metrics p:nth-child(3)').text()
      )
    );
  });
});

module.exports = fileExchangeAverageRating;
