import axios from 'axios';
import express, { Router, Request, Response } from 'express';
import BadgeData from '../../model/BadgeData';

const stackoverflow: Router = express();

// Reputation sub route
stackoverflow.get('/reputation', (_req: Request, res: Response) => {
  axios
    .get('https://api.stackexchange.com/users/5290070?site=stackoverflow')
    .then((result) => {
      // StackOverflow
      res.send(
        new BadgeData(
          'SO Rep',
          String(result.data.items[0].reputation).toString(),
          'grey',
          'yellow'
        )
      );
    });
});

export default stackoverflow;
