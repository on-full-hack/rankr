import LeagueSchema from './schemas/LeagueSchema';
import { createModel } from './DatabaseConnection';
import UserSchema from './schemas/UserSchema';

export const leagueModel = createModel('League', LeagueSchema);
export const userModel = createModel('User', UserSchema);
