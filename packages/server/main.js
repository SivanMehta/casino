import express from 'express';
import { WebSocketServer } from 'ws';
import morgan from 'morgan';
import { createServer } from 'http';
import { setup as setupAPIRoutes } from './api/index.js';
import { setup as setupWebSocket } from './db/socket.js';

const app = express();
app.use(morgan('dev'));
setupAPIRoutes(app);

const server = createServer(app);
const wss = new WebSocketServer({ server });
setupWebSocket(app, wss);

server.listen(8080, function () {
  console.log('Listening on http://localhost:8080');
});
