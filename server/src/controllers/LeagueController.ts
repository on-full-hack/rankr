import { Request, Response } from 'express-serve-static-core';
import LeagueService from '../services/LeagueService';
import Constants from './Constants';

export default class LeagueController {
  constructor(public leagueService: LeagueService) {}

  getAllLeagues = async (req: Request, res: Response) => {
    const leagues = await this.leagueService.getAllLeagues();
    res.json({ values: leagues });
  };

  createLeague = async (req: Request, res: Response) => {
    const { name, description, discipline, type } = req.body;
    const result = await this.leagueService.addLeague(name, description, discipline, type);
    sendResponse[result](res);
  };
}

const sendResponse = {
  [Constants.ERROR]: (res: Response) => {
    res.status(501);
    res.send(JSON.stringify({ message: Constants.ERROR }));
  },
  [Constants.LEAGUE_CREATED]: (res: Response) => {
    res.status(201);
    res.send(JSON.stringify({ message: Constants.LEAGUE_CREATED }));
  },
};
