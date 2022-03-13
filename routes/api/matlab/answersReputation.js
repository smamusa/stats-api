const answersReputation = require('express').Router();

const { payload, url } = require('./utils');

const cheerio = require('cheerio');
const got = import('got');

answersReputation.get('/', (req, res) => {
  got(url).then((response) => {
    const $ = cheerio.load(response.body);
    res.send(
      payload(
        'MATLAB Answers Reputation',
        $('#answers_metrics p:nth-child(2)').text()
      )
    );
  });
});

module.exports = answersReputation;
