import { decrypt, encrypt } from '../db/auth.js';
import { spinWheel } from './game-machines/roulette.js';
import { Blackjack, proceed } from './game-machines/blackjack.js';

export function addGameRoutes(app) {
  app.post("/api/roulette", async (req, res) => {
    const { username } = decrypt(req.cookies.auth);
    const user = await app.db.get(`user:${username}`);
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

  app.get('/api/blackjack/:game', async (req, res) => {
    const gameId = req.params.game;
    const { username } = decrypt(req.cookies.auth);
    // start a new game
    if(gameId == 'new') {
      const game = new Blackjack();
      await game.getDeck();
      
      app.db.set(`blackjack:${game.id}:${username}`, game);
      return res.json(game.serialize());
    }

    
    // lookup existing game
    const game = await app.db.get(`blackjack:${gameId}:${username}`);
    if(!game) {
      return res.sendStatus(404);
    }
    return res.json(game.serialize());
  });

  app.post('/api/blackjack/:game/move', proceed)
}
