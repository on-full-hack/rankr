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
    const { user_id } = req.headers;
    const result = await this.leagueService.addLeague(
      user_id.toString(),
      name,
      description,
      discipline,
      type
    );
    sendResponse[result.status](res, result.league);
  };

  deleteLeague = async (req: Request, res: Response) => {
    const league_id = req.params.id;
    const { user_id } = req.headers;
    const result = await this.leagueService.deleteLeague(user_id.toString(), league_id);
    sendResponse[result.status](res, result.league);
  };
}

const sendResponse = {
  [Constants.ERROR]: (res: Response) => {
    res.status(501);
    res.send(JSON.stringify({ message: Constants.ERROR }));
  },
  [Constants.LEAGUE_CREATED]: (res: Response, league: Object) => {
    res.status(201);
    res.send(JSON.stringify({ message: Constants.LEAGUE_CREATED, league: league }));
  },
  [Constants.LEAGUE_DELETED]: (res: Response, league: Object) => {
    res.status(200);
    res.send(JSON.stringify({ message: Constants.LEAGUE_DELETED, league: league }));
  },
};
