const fileExchange = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = require('got');
const reputation = require('./fileExchangeReputation');

fileExchange.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload(
        'MATLAB File Exchange Rank',
        $('#fileexchange_metrics p:first-child').text()
      )
    );
  });
});

fileExchange.use('/reputation', reputation);

module.exports = fileExchange;
