const codyScore = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = import('got');

codyScore.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload('MATLAB Cody Score', $('#cody_metrics p:nth-child(3)').text())
    );
  });
});

module.exports = codyScore;
