import { Request, Response } from 'express-serve-static-core';
import LeagueService from '../services/LeagueService';

export default class LeagueController {
    constructor(public leagueService: LeagueService) {
        this.getAllLeagues = this.getAllLeagues.bind(this);
    }

    async getAllLeagues(req: Request, res: Response) {
        const result = await this.leagueService.getAllLeagues();
    }
}
