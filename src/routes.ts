import {Express, Request, Response } from 'express'
import { omit } from 'lodash';
import { createUserSessionHandler, getUserSessionsHandler } from './controller/session.controller';
import { createUserHandler, deleteUserHandler, getUserHandler, updateUserHandler } from './controller/user.controller';
import requireUser from './middleware/requireUser';
import validate from './middleware/validateResource';
import userModel from './models/user.model';
import { createSessionSchema } from './schema/session.schema';
import { createUserSchema } from './schema/user.schema';

function routes(app: Express ) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  app.post('/api/user', validate(createUserSchema), createUserHandler)

  app.get('/api/user/:id', getUserHandler)

  app.put('/api/user/:id', updateUserHandler)

  app.delete('/api/user/:id', deleteUserHandler)

  app.post('/api/sessions', validate(createSessionSchema), createUserSessionHandler)

  app.get('/api/sessions', requireUser, getUserSessionsHandler)
}

export default routes;