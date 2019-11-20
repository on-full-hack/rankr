import awilix from 'awilix';
import LeagueService from './services/LeagueService';
import LeagueController from './controllers/LeagueController';

export default function buildContainer() {
    const container = awilix.createContainer();
    container.register({
        leagueService: awilix.asClass(LeagueService),
    });

    return {
        LeagueController: container.build(LeagueController),
    };
}
