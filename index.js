const express = require('express');
const app = express();

let port = process.env.PORT;
if (port == null || port == '') {
  port = 8000;
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
