const fileExchange = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = import('got');
const reputation = require('./fileExchangeReputation');
const averageRating = require('./fileExchangeAverageRating');
const contributions = require('./fileExchangeContributions');
const downloads = require('./fileExchangeDownloads');

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
fileExchange.use('/averageRating', averageRating);
fileExchange.use('/contributions', contributions);
fileExchange.use('/downloads', downloads);

module.exports = fileExchange;
