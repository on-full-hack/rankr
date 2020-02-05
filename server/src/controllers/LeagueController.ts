import { Request, Response } from 'express-serve-static-core';
import LeagueService from '../services/LeagueService';

export default class LeagueController {
  constructor(public leagueService: LeagueService) {}

  getAllLeagues = async (req: Request, res: Response) => {
    const leagues = await this.leagueService.getAllLeagues();
    res.json({ values: leagues });
  };

  createLeague = async (req: Request, res: Response) => {
    return await this.leagueService.addLeague();
  };
}
