import axios from 'axios';
import express, { Router, Request, Response } from 'express';
import BadgeData from '../../model/BadgeData.js';
import winston from 'winston';

const stackoverflow: Router = express();

// Reputation sub route
stackoverflow.get('/reputation', (_req: Request, res: Response) => {
  axios
    .get<StackOverflowResponse>(
      'https://api.stackexchange.com/users/5290070?site=stackoverflow'
    )
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
    })
    .catch((error) => {
      winston.error(error);
    });
});

export interface StackOverflowResponse {
  items: Item[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface Item {
  badge_counts: BadgeCounts;
  account_id: number;
  is_employee: boolean;
  last_modified_date: number;
  last_access_date: number;
  reputation_change_year: number;
  reputation_change_quarter: number;
  reputation_change_month: number;
  reputation_change_week: number;
  reputation_change_day: number;
  reputation: number;
  creation_date: number;
  user_type: string;
  user_id: number;
  location: string;
  website_url: string;
  link: string;
  profile_image: string;
  display_name: string;
}

export interface BadgeCounts {
  bronze: number;
  silver: number;
  gold: number;
}

export default stackoverflow;
