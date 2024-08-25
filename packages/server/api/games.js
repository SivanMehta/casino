import { decrypt, encrypt } from '../db/auth.js';
import { spinWheel } from './game-machines/index.js';

export function addGameRoutes(app) {
  app.post("/roulette", async (req, res) => {
    const user = decrypt(req.cookies.auth);
    const bet = req.body;

    if (user.balance < bet.amount) {
      return res.sendStatus(402);
    }

    const outcome = spinWheel(bet);
    user.balance += outcome;

    app.db.set(`user:${user.username}`, user);
    res.cookie('auth', encrypt(user));

    res.send(user);
  });

}
