import express, { Router, Request, Response } from 'express';
import BadgeData from '../model/BadgeData';
import Stackoverflow from './stackexchange/Stackoverflow';
import MatlabRouter from './matlab/MatlabRouter';

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
