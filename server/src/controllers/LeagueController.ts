import { Request, Response } from 'express-serve-static-core';
import LeagueService from '../services/LeagueService';

export default class LeagueController {
    constructor(public leagueService: LeagueService) {}

    getAllLeagues = async (req: Request, res: Response) => {
        const result = await this.leagueService.getAllLeagues();
    };
}
