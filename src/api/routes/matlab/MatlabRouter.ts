import express, { Router, Request, Response } from 'express';
import * as m from '../../../utils/MATLAB';
import { load } from 'cheerio';
import got from 'got';

const MatlabRouter: Router = express();
const matlab: m.MATLAB = new m.MATLAB();

Object.keys(m.Endpoint).forEach((_endpoint, i) => {
  MatlabRouter.get(
    Object.values(m.Endpoint)[i],
    (_req: Request, res: Response) => {
      got(matlab.url).then((response) => {
        const $ = load(response.body);
        res.send(
          matlab.payload(
            Object.values(m.Label)[i],
            $(Object.values(m.CSSSelector)[i]).text()
          )
        );
      });
    }
  );
});

export default MatlabRouter;
