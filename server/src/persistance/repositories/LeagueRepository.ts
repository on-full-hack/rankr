import Repository from './Repository';

export default class LeagueRepository extends Repository {
  constructor(public leagueModel: any) {
    super(leagueModel);
  }

  addLeague = async (name: string, description: string, discipline: string, type: string) => {
    await this.add({ name, description, discipline, type });
  };
}
