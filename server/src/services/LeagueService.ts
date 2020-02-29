import LeagueRepository from '../persistance/repositories/LeagueRepository';
import Consants from '../controllers/Constants';

export default class LeagueService {
  constructor(public leagueRepository: LeagueRepository) { }

  getAllLeagues = () => {
    try {
      return this.leagueRepository.getAll();
    } catch (e) {
      console.error(e);
    }
  };

  addLeague = async (name: string, description: string, discipline: string, type: string) => {
    try {
      await this.leagueRepository.addLeague(name, description, discipline, type);
      return Consants.LEAGUE_CREATED;
    }
    catch (e) {
      console.error(e);
      return Consants.ERROR;
    }
  };
}
