import express from 'express';
import path from 'path';
import { encrypt } from '../db/auth.js';

export const UIRoutes = [
  '/',
  '/login',
  '/roulette',
  '/blackjack',
  '/blackjack/:game',
  '/faq'
];

export function addUIRoutes(app) {
  const staticDirectory = path.join('..', 'client', 'dist');
  const UIRouter = express.static(staticDirectory);
  UIRoutes.forEach(route => {
    app.use(route, UIRouter)
  });

  app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await app.db.get(`user:${username}`);
    if(!user) {
      return res.redirect("/?error=401");
    }

    if(user.password !== password) {
      return res.redirect("/?error=403");
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
