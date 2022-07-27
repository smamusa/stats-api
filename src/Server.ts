import express, { Application, Router, Request, Response } from 'express';
import 'dotenv/config';
import Root from './api/routes/Root';

const app: Application = express();
const PORT = process.env.PORT || 8000;

// Main router
app.use('/api', Root);

// define a route handler for the default home page
app.get('/ping', async (_req: Request, res: Response) => {
  res.send({
    message: 'pong',
  });
});

// start the Express server
app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${PORT}`);
});
