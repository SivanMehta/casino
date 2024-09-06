import { decrypt, encrypt } from '../db/auth.js';
import { spinWheel } from './game-machines/index.js';

async function loadGameState(app, key) {
  
}

export function addGameRoutes(app) {
  app.post("/api/roulette", async (req, res) => {
    const {username} = decrypt(req.cookies.auth);
    const user = await app.db.get('user', username);
    const wager = req.body;

    // determine whether user has bet more than they have to balance
    const total = Object
      .values(wager)
      .reduce((acc, cur) => acc + cur, 0) * 10;
    if (user.balance < total) {
      return res.sendStatus(402);
    }

    const {result, winnings} = spinWheel(wager);
    user.balance += winnings;
    app.db.set(`user:${user.username}`, user);

    res.cookie('auth', encrypt(user));
    res.send({ result, winnings });
  });

  app.post('/api/blackjack/:game', async (req, res) => {
    const { game } = req.params;
    const { username } = decrypt(req.cookies.auth);
    // start a new game
    if(game == 'new') {
      const gameId = 123456789; // should be a UUID
      const hand = { hand: [] };
      
      app.db.set(`blackjack:${gameId}:${username}`, hand);
      return res.json({ gameId });
    }
    
    // game must already exist
    const state = app.db.get(`blackjack:${game}:${username}`);
    return res.json({ state });
  });
}
