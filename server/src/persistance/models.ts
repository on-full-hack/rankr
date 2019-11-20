import LeagueSchema from './schemas/LeagueSchema';
import { createModel } from './DatabaseConnection';

export const LeagueModel = createModel('League', LeagueSchema);
