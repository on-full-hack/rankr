import LeagueSchema from './schemas/LeagueSchema';
import { createModel } from './DatabaseConnection';

export const leagueModel = createModel('League', LeagueSchema);
