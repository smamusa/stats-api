const fileExchangeDownloads = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = import('got');

fileExchangeDownloads.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload(
        'MATLAB File Exchange Downloads',
        $('#fileexchange_metrics p:nth-child(6)').text()
      )
    );
  });
});

module.exports = fileExchangeDownloads;
