import express, { Application } from 'express';
import 'dotenv/config';
import RootRouter from './api/routes/RootRouter.js';
import winston from 'winston';

const app: Application = express();
const PORT = process.env.PORT || 8000;

// Main router
app.use('/api', RootRouter);

// start the Express server
app.listen(PORT, () => {
  winston.info(`Server started at http://localhost:${PORT}`);
});
