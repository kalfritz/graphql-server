import { Response } from 'express';

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie('jid', token, {
    httpOnly: true,
    path: '/refresh_token',
    expires: new Date(Date.now() + 60 * 60 * 24 * 7), //7 days
  });
};
