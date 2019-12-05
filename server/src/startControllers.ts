import { Application } from 'express';
import buildContainer from './container';

export function startControllers(app: Application) {
    const container = buildContainer();
    const LeagueController = container.LeagueController;

    /*
     * LEAGUE ROUTES
     */

    app.get('/leagues', LeagueController.getAllLeagues);

    app.post('/leagues', (req, res) => {
        res.send('Add new League');
    });

    app.get('/leagues/:id', (req, res) => {
        res.send('Get league details');
    });

    app.put('/leagues', (req, res) => {
        res.send('Update league');
    });

    app.delete('/leagues/:id', (req, res) => {
        res.send('Delete league');
    });

    app.put('/leagues', (req, res) => {
        res.send('Update league');
    });

    /*
     * USERS WITH LEAGUES ROUTES
     */

    app.post('/user/join/:id', (req, res) => {
        res.send('Join to league');
    });

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
