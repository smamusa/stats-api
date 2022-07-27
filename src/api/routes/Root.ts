import express, { Router, Request, Response } from 'express';
import BadgeData from '../model/BadgeData';
import Stackoverflow from './stackexchange/Stackoverflow';
import MatlabRouter from './matlab/MatlabRouter';

const root: Router = express();

// Stackoverflow sub route
root.use('/stackoverflow', Stackoverflow);
root.use('/matlab/', MatlabRouter);

// Hello World (root) route to make sure API is working
root.use('/', (_req: Request, res: Response) => {
  res.send(new BadgeData('mystats-api', 'Working !', 'lightgrey', 'green'));
});

export default root;
