const fileExchangeContributions = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = import('got');

fileExchangeContributions.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload(
        'MATLAB File Exchange Contributions',
        $('#fileexchange_metrics p:nth-child(4)').text()
      )
    );
  });
});

module.exports = fileExchangeContributions;
