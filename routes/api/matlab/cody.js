const cody = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = require('got');
const codyScore = require('./codyScore');

cody.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload('MATLAB Cody Rank', $('#cody_metrics p:first-child').text())
    );
  });
});

cody.use('/score', codyScore);

module.exports = cody;
