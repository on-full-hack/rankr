import express, { Application } from 'express';
import { Request, Response, NextFunction } from 'express-serve-static-core';
import config from './config';
import { startControllers } from './startControllers';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

startup();

async function startup() {
  const app = express();
  const router = express.Router();
  applyMiddleware(app);
  startControllers(router);
  app.use('/api', router);

  console.log(`🚀 Server ready at port ${config.server.port}`);
  app.listen(config.server.port);
}

function applyMiddleware(app: Application) {
  app.use(logRequest);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
}

function logRequest(req: Request, res: Response, next: NextFunction) {
  console.info(`${req.method} ${req.originalUrl}`);
  next();
}
