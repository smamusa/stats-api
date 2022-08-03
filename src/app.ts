import express, { Application } from 'express';
import 'dotenv/config';
import RootRouter from './api/routes/RootRouter';

const app: Application = express();
const PORT = process.env.PORT || 8000;

// Main router
app.use('/api', RootRouter);

// start the Express server
app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${PORT}`);
});
