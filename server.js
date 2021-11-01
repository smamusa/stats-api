const express = require('express');
const matlabRouter = require('./routes/api/matlab/matlab');

const app = express();

// Get free port or port 10000
let port = process.env.PORT || 10000;

// Hello World route to make sure API is working
app.get('/', (req, res) => {
  res.send({
    schemaVersion: 1,
    label: 'mystats-api',
    message: 'Hello World !',
    color: 'green',
  });
});

// Forwards any requests to the /matlab URI to MATLAB Router
app.use('/matlab', matlabRouter);

// Get Stackoverflow reputation
app.use(
  '/api/stackexchange/stackoverflow/reputation',
  require('./routes/api/stackexchange/stackoverflow')
);

// MATLAB Routes
app.use('/api/matlab', require('./routes/api/matlab/matlab'));

// app.use('/fileexchange', require('./routes/api/matlab/matlab'));

// Start API server
app.listen(port, () => {
  console.log(`Api Server listening on http://localhost:${port}`);
});
