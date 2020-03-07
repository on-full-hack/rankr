import LeagueRepository from '../persistance/repositories/LeagueRepository';
import Constants from '../controllers/Constants';

export default class LeagueService {
  constructor(public leagueRepository: LeagueRepository) { }

  getAllLeagues = async () => {
    try {
      return await this.leagueRepository.getAllWithSpecificColumns('_id creator_id name description discipline type');
    } catch (e) {
      console.error(e);
    }
  };

  addLeague = async (creator_id: string, name: string, description: string, discipline: string, type: string) => {
    try {
      const league = await this.leagueRepository.addLeague(creator_id, name, description, discipline, type);
      return { status: Constants.LEAGUE_CREATED, league: league };
    }
    catch (e) {
      console.error(e);
      return { status: Constants.ERROR, league: {} };
    }
  };

  getLeague = async (league_id: string) => {
    try {
      return await this.leagueRepository.findById(league_id);
    } catch (e) {
      console.error(e);
    }
  }

  updateLeague = async (id: string, creator_id: string, name: string, description: string, discipline: string, type: string) => {
    try {
      const league = await this.leagueRepository.updateLeague(id, creator_id, name, description, discipline, type);
      return { status: Constants.LEAGUE_UPDATED, league: league };
    }
    catch (e) {
      console.error(e);
      return { status: Constants.ERROR, league: {} };
    }
  }

  joinToLeague = async (league_id: string, user_id: string) => {
    const league = await this.leagueRepository.findById(league_id);
    const { players, playersWaitingToJoin } = league;
    if (players.length > 0 && players.find((player: String) => player === user_id).length > 0) {
      return { status: Constants.LEAGUE_ALREADY_JOINED }
    }

    if (playersWaitingToJoin.length > 0 && playersWaitingToJoin.find((player: String) => player === user_id).length > 0) {
      return { status: Constants.LEAGUE_JOINED }
    } else {
      playersWaitingToJoin.push(user_id);
      await this.leagueRepository.update({ _id: league_id }, { playersWaitingToJoin: playersWaitingToJoin })
      return { status: Constants.LEAGUE_JOINED }
    }
  }

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
