import express from 'express';
import onStartup from './startup';
import config from './config';
import { startControllers } from './startControllers';

const app = express();
startControllers(app);

onStartup()
    .then(() => app.listen(config.server.port))
    .then(() => {
        // eslint-disable-next-line no-console
        console.log(`🚀 Server ready at port ${config.server.port}`);
    }) // eslint-disable-next-line no-console
    .catch(e => console.log('Server startup error', e));
