const answers = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = require('got');

answers.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload('MATLAB Answers Rank', $('#answers_metrics p:first-child').text())
    );
  });
});

answers.use('/reputation', require('./answersReputation'));

module.exports = answers;
