export function addRoutes(app) {
  app.post('/login', async (req, res) => {
    const { id } = req.params;
    const { username, password } = req.body;

    console.log(username, password);
    const user = await app.db.get('user', `${username}`);
    if(!user) {
      return res.status(401).json({ error: 'User not found' }) 
    }

    if(user.password !== password) {
      return res.status(403).json({ error: 'Incorrect Credentials'})
    }

    // set auth cookie
    // redirect to home page
    res.json(user);
  });
}
