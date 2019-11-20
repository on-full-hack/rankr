"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = __importDefault(require("./container"));
function startControllers(app) {
    const container = container_1.default();
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
exports.startControllers = startControllers;
//# sourceMappingURL=startControllers.js.map