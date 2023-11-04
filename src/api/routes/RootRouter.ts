import express, { Router, Request, Response } from 'express';
import BadgeData from '../model/BadgeData.js';
import Stackoverflow from './stackexchange/Stackoverflow.js';
import MatlabRouter from './matlab/MatlabRouter.js';

const RootRouter: Router = express();

// Stackoverflow sub route
RootRouter.use('/stackoverflow', Stackoverflow);
// MATLAB sub route
RootRouter.use('/matlab', MatlabRouter);

// Hello World (root) route to make sure API is working
RootRouter.use('/', (_req: Request, res: Response) => {
  res.send(new BadgeData('mystats-api', 'Working !', 'lightgrey', 'green'));
});

export default RootRouter;
