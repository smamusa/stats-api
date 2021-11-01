const fileExchangeReputation = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = require('got');

fileExchangeReputation.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload(
        'MATLAB Answers Reputation',
        $('#fileexchange_metrics p:nth-child(2)').text()
      )
    );
  });
});

module.exports = fileExchangeReputation;
