import express from 'express';
import path from 'path';
import { encrypt, generateError } from '../db/auth.js';

export const UIRoutes = [
  '/',
  '/roulette',
  '/faq'
];


export function addRoutes(app) {
  const staticDirectory = path.join('..', 'client', 'dist');
  const UIRouter = express.static(staticDirectory);
  UIRoutes.forEach(route => {
    app.use(route, UIRouter)
  });

  app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await app.db.get('user', `${username}`);
    if(!user) {
      return generateError(res, 401)
    }

    if(user.password !== password) {
      return generateError(res, 403)
    }

    // set auth cookie
    res.cookie('auth', encrypt(user));
    // redirect to home page
    res.redirect('/');
  });

  app.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
  });
}
