import { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import config from './config';

export const logRequest = (req: Request, res: Response, next: NextFunction) => {
  console.info(`${req.method} ${req.originalUrl}`);
  next();
};

export const checkJwt = () =>
  jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${config.auth.domain}.well-known/jwks.json`,
    }),

    audience: config.auth.audience,
    issuer: config.auth.domain,
    algorithms: ['RS256'],
  });

export const applyMiddlewares = (app: Application) => {
  app.use(logRequest);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // app.use(checkJwt);
};
