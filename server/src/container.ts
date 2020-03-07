import { createContainer, asClass, InjectionMode, asValue } from 'awilix';
import LeagueService from './services/LeagueService';
import LeagueController from './controllers/LeagueController';
import LeagueRepository from './persistance/repositories/LeagueRepository';
import { leagueModel, userModel } from './persistance/models';

export default function buildContainer() {
  const container = createContainer({
    injectionMode: InjectionMode.CLASSIC,
  });

  container.register({
    leagueService: asClass(LeagueService).singleton(),
    leagueRepository: asClass(LeagueRepository).singleton(),
    leagueModel: asValue(leagueModel),
    userModel: asValue(userModel),
  });

  return {
    LeagueController: container.build(LeagueController),
  };
}
