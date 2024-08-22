import express from 'express';
import path from 'path';

import Connection from '../db/connection.js';
import { routes as UIRoutes } from './ui.js';
import { addRoutes } from './api.js';

export function setup(app) {
  const staticDirectory = path.join('..', 'client', 'dist');
  
  const UIRouter = express.static(staticDirectory);
  UIRoutes.forEach(route => {
    app.use(route, UIRouter)
  });
  
  app.db = new Connection();
  app.use(express.json())
  app.use(express.urlencoded());
  addRoutes(app);
}
