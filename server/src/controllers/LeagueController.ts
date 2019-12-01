import { Request, Response } from 'express-serve-static-core';
import LeagueService from '../services/LeagueService';

export default class LeagueController {
    constructor(public leagueService: LeagueService) {}

    getAllLeagues = (req: Request, res: Response) => {
        return this.leagueService.getAllLeagues();
    };
}
