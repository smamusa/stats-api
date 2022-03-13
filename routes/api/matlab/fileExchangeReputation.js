const fileExchangeReputation = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = import('got');

fileExchangeReputation.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload(
        'MATLAB File Exchange Reputation',
        $('#fileexchange_metrics p:nth-child(2)').text()
      )
    );
  });
});

module.exports = fileExchangeReputation;
