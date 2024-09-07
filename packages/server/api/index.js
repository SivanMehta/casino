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
  app.use((req, res, next) => {
    req.app = app;
    next();
  })

  // application level routes
  addUIRoutes(app);
  addGameRoutes(app);

  // debugging routes
  app.get("/_debug", async (req, res) => {
    const dump = {};
    app.db.db.forEach((value, key) => {
      if(key.startsWith('user')) {
        dump[key] = value;
      } else if(key.startsWith('blackjack')) {
        dump[key] = value.serialize();
      }
    })
    res.send(dump);
  });
}
