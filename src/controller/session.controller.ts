import config from 'config';
import { Request, Response } from 'express';
import { createSession, findSessions } from '../service/session.service';
import { validatePassword } from '../service/user.service';
import { signJwt } from '../utils/jwt.utils';

export async function createUserSessionHandler(
  req: Request, 
  res: Response
  ) {
  //valir senha
  
  const user = await validatePassword(req.body);
  if(!user) {
    return res.status(401).send('Invalid email or password');
  }

  //criar  a sessao
  const session = await createSession(user._id, req.get("user-agent") || "");
  //criar o acesso ao token
  const accessToken = signJwt({
    ...user,
    session: session._id
  },{expiresIn: config.get('accessTokenTtl')} //15m
  )

  //criar um refresh do token
  const refreshToken = signJwt({
    ...user,
    session: session._id
  },{expiresIn: config.get('accessTokenTtl')} //15m
  )

  //retornar o aecsso e refresh do token

  return res.send({ accessToken, refreshToken })
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}