import LeagueRepository from '../persistance/repositories/LeagueRepository';
import Constants from '../controllers/Constants';

export default class LeagueService {
  constructor(public leagueRepository: LeagueRepository) { }

  getAllLeagues = () => {
    try {
      return this.leagueRepository.getAll();
    } catch (e) {
      console.error(e);
    }
  };

  addLeague = async (creator_id: string, name: string, description: string, discipline: string, type: string) => {
    try {
      const league = await this.leagueRepository.addLeague(creator_id, name, description, discipline, type);
      console.log(league);
      return { status: Constants.LEAGUE_CREATED, league: league };
    }
    catch (e) {
      console.error(e);
      return { status: Constants.ERROR, league: {} };
    }
  };

  deleteLeague = async (creator_id: string, league_id: string) => {
    try {
      const league = await this.leagueRepository.findById(league_id);
      if (league.creator_id === creator_id) {
        await this.leagueRepository.removeOne({ _id: league_id });
        return { status: Constants.LEAGUE_DELETED, league: league };
      } else {
        console.error("Provided user is not a creator");
        return { status: Constants.ERROR, league: {} };
      }
    } catch (e) {
      console.error(e);
      return { status: Constants.ERROR, league: {} };
    }
  }
}
