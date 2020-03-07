import { Router } from 'express';
import buildContainer from './container';

export function startControllers(app: Router) {
  const container = buildContainer();
  const LeagueController = container.LeagueController;

  /*
   * LEAGUE ROUTES
   */

  app.get('/leagues', LeagueController.getAllLeagues);

  app.post('/leagues', LeagueController.createLeague);

  app.get('/leagues/:id', LeagueController.getLeague);

  app.put('/leagues', LeagueController.updateLeague);

  app.delete('/leagues/:id', LeagueController.deleteLeague);

  /*
   * USERS WITH LEAGUES ROUTES
   */

  app.post('/user/join-to-league/:id', LeagueController.joinToLeague);

  app.post('/user/join/link/:codeToJoin', (req, res) => {
    res.send('Join to league by link');
  });

  app.post('/user/invite', (req, res) => {
    res.send('Invite uses to league');
  });

  app.delete('/user/:userId/league/:leagueId', (req, res) => {
    res.send('Delete user from league');
  });
}
