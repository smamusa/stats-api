const express = require('express');
const rateLimit = require('express-rate-limit');
const apicache = require('apicache');
const Monitoring = require('./monitoring');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});

require('dotenv').config();

const app = express();

// Get free port or port 10000
let port = process.env.PORT || 10000;

// Init cache
let cache = apicache.middleware;
// Use the cache globally
app.use(cache('10 minutes'));

// Create the rate limit rule
const apiRequestLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 requests per windowMs
});
// Use the limit rule as an application middleware
app.use(apiRequestLimiter);

// Main router
app.use('/api', require('./routes'));

// Get Stackoverflow reputation
app.use(
  '/api/stackexchange/stackoverflow/reputation',
  require('./routes/api/stackexchange/stackoverflow')
);

let monitoring = new Monitoring();

monitoring.on('collect', () => {
  monitoring.collectRamPoint();
  logger.info(
    `RAM Data Collected : ${
      monitoring.ramPoints[monitoring.ramPoints.length - 1]
    } => Total points : ${monitoring.ramPoints.length}`
  );
});

monitoring.on('push', () => {
  monitoring.pushRamPoints();
  logger.info(`Pushed to DB`);
});

// Start API server
app.listen(port, () => {
  logger.info(`Api Server listening on http://localhost:${port}`);
});
