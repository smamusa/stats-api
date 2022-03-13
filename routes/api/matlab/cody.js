const cody = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = import('got');

cody.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload('MATLAB Cody Rank', $('#cody_metrics p:first-child').text())
    );
  });
});

cody.use('/score', require('./codyScore'));
cody.use('/badges', require('./codyBadges'));

module.exports = cody;
