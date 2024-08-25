import express from 'express';
import cookies from 'cookie-parser';
import path from 'path';

import Connection from '../db/connection.js';
import { addUIRoutes } from './ui.js';
import { addGameRoutes } from './games.js';

export function setup(app) {
  // setting db and websockets
  app.db = new Connection();

  // global middleware
  app.use(express.json())
  app.use(express.urlencoded());
  app.use(cookies());

  // application level routes
  addUIRoutes(app);
  addGameRoutes(app);

  // debugging routes
  app.get("/_debug", (req, res) => {
    const dump = Object.fromEntries(app.db.db);
    res.send(dump);
  });
}
