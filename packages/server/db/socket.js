export function setup(app, wss) {
  wss.on('connection', function (ws) {
    console.log('new connection!');
    ws.on('error', console.error);
    ws.on('close', function () {
      console.log('ending client connection!');
    });

    ws.on('message', async function (message) {
      const { action, payload } = JSON.parse(message);
      const res = await app.db[action](payload)
      ws.send(JSON.stringify(res));
    })
  });
}
