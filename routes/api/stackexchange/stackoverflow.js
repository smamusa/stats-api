const express = require('express');
const router = express.Router();

const axios = require('axios');

router.get('/', (req, res) => {
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

module.exports = router;
