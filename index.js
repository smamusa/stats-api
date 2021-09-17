const express = require('express');
const axios = require('axios');
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
