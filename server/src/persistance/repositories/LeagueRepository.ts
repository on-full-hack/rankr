import Repository from './Repository';

export default class LeagueRepository extends Repository {
  constructor(public leagueModel: any) {
    super(leagueModel);
  }

  addLeague = async (creator_id: string, name: string, description: string, discipline: string, type: string) => {
    await this.add({ creator_id, name, description, discipline, type });
  };
}
