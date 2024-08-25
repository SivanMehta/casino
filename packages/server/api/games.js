import { decrypt, encrypt } from '../db/auth.js';
import { spinWheel } from './game-machines/index.js';

export function addGameRoutes(app) {
  app.post("/roulette", async (req, res) => {
    const {username} = decrypt(req.cookies.auth);
    const user = await app.db.get('user', username);
    const wager = req.body;

    const total = Object
      .values(wager)
      .reduce((acc, cur) => acc + cur, 0) * 10;

    if (user.balance < total) {
      return res.sendStatus(402);
    }

    const winnings = spinWheel(wager);
    user.balance += winnings;
    app.db.set(`user:${user.username}`, user);

    res.cookie('auth', encrypt(user));
    res.send({ winnings });
  });

}
