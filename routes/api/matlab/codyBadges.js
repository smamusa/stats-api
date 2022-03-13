const codyBadges = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = require('got');

codyBadges.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload('MATLAB Cody Badges', $('#cody_metrics p:nth-child(4)').text())
    );
  });
});

module.exports = codyBadges;
