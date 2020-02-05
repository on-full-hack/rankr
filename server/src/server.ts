import express from 'express';
import dotenv from 'dotenv';
import config from './config';
import { startControllers } from './startControllers';
import { applyMiddlewares } from './middlewares';

startup();

async function startup() {
  if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
  }
  const app = express();
  const router = express.Router();
  // applyMiddlewares(app);
  startControllers(router);
  app.use('/api', router);

  console.log(`🚀 Server ready at port ${config.server.port}`);
  app.listen(config.server.port);
}
