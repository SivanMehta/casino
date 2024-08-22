export function addRoutes(app) {
  app.get('/api/game/:gameId', async (req, res) => {
    const { gameId } = req.params;

    const data = await app.db.get('game', gameId);

    if(!data) {
      return res.status(404).json({ error: 'Game not found' }) 
    }

    res.json(data);
  });

  app.get('/api/games', async (req, res) => {
    const data = await app.db.getAllGames();

    res.json(data);
  });
}
