const router = require('express').Router();

router.use('/matlab', require('./api/matlab/matlab'));

// Hello World route to make sure API is working
router.use('/', (req, res) => {
  res.send({
    schemaVersion: 1,
    label: 'mystats-api',
    message: 'Working !',
    color: 'green',
  });
});

module.exports = router;
