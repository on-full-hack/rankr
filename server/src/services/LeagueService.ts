import LeagueRepository from '../persistance/repositories/LeagueRepository';

export default class LeagueService {
    constructor(public leagueRepository: LeagueRepository) {
        this.getAllLeagues = this.getAllLeagues.bind(this);
    }
    async getAllLeagues() {
        try {
            const leagues = await this.leagueRepository.getAll();
            return leagues;
        } catch (e) {
            console.error(e);
        }
    }
}
