import Repository from './Repository';
import { Model } from 'mongoose';

export default class LeagueRepository extends Repository {
    constructor(public leagueModel: Model<any>) {
        super(leagueModel);
    }
}
