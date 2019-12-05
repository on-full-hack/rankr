import LeagueRepository from '../persistance/repositories/LeagueRepository';

export default class LeagueService {
    constructor(public leagueRepository: LeagueRepository) {}

    getAllLeagues = () => {
        try {
            return this.leagueRepository.getAll();
        } catch (e) {
            console.error(e);
        }
    };
}
