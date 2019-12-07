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

  addLeague = async () => {
    try {
      await this.leagueRepository.addLeague('example', 'example', 'example', 'example');
    } catch (e) {
      console.error(e);
    }
  };
}
