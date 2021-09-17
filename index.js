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

const response = {
  schemaVersion: 1,
  label: 'mystats-api',
  message: 'Hello world !',
  color: 'orange',
};

app.get('/', (req, res) => {
  res.send(response);
});

app.get('/stackrep', (req, res) => {
  let rep = getReputation();
  response.label = 'stackoverflow rep';
  response.message = rep;
  response.color = 'yellow';
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

async function getReputation() {
  try {
    const response = await axios.get(
      'https://api.stackexchange.com/users/5290070?site=stackoverflow'
    );
    return response.data.items[0].reputation;
  } catch (error) {}
}
