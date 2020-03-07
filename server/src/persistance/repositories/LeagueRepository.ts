import Repository from './Repository';

export default class LeagueRepository extends Repository {
  constructor(public leagueModel: any) {
    super(leagueModel);
  }

  addLeague = async (
    creator_id: string,
    name: string,
    description: string,
    discipline: string,
    type: string
  ) => {
    return await this.add({ creator_id, name, description, discipline, type });
  };

  updateLeague = async (
    id: string,
    creator_id: string,
    name: string,
    description: string,
    discipline: string,
    type: string
  ) => {
    await this.update(
      { _id: id, creator_id: creator_id },
      { id, creator_id, name, description, discipline, type }
    );
    return await this.findById(id);
  };
}
