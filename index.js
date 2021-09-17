const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const got = require('got');
const app = express();

let port = process.env.PORT;
if (port == null || port == '') {
  port = 8000;
}

async function getUser() {
  try {
    const response = await axios.get(
      'https://api.stackexchange.com/users/5290070?site=stackoverflow'
    );
    console.log(response.data.items[0].reputation);
    // console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
  }
}

app.get('/', (req, res) => {
  res.send({
    schemaVersion: 1,
    label: 'mystats-api',
    message: 'Hello world !',
    color: 'orange',
  });
});

app.get('/stackrep', (req, res) => {
  axios
    .get('https://api.stackexchange.com/users/5290070?site=stackoverflow')
    .then((result) => {
      res.send({
        schemaVersion: 1,
        label: 'stackoverflow rep',
        message: String(result.data.items[0].reputation).toString(),
        color: 'yellow',
      });
    });
});

app.get('/matlab-answers-rank', (req, res) => {
  const matlabProfileUrl =
    'https://www.mathworks.com/matlabcentral/profile/authors/21973659';

  got(matlabProfileUrl).then((response) => {
    const $ = cheerio.load(response.body);
    const rankInfoArray = $('#answers_metrics p').html().split('<br>');
    const re1 = new RegExp('>(.*?)<');
    const re2 = new RegExp('of\\s(.*?)\\n');
    res.send({
      schemaVersion: 1,
      label: 'MATLAB Answers Rank',
      message: `${rankInfoArray[1].match(re1)[1]} of ${
        rankInfoArray[2].match(re2)[1]
      }`,
      labelColor: 'orange',
      color: 'blue',
    });
    console.log(
      `${rankInfoArray[1].match(re1)[1]} of ${rankInfoArray[2].match(re2)[1]}`
    );
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
