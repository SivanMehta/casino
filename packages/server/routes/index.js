import express from 'express';
import cookies from 'cookie-parser';
import path from 'path';

import Connection from '../db/connection.js';
import { addRoutes } from './ui.js';

export function setup(app) {
  // setting db and websockets
  app.db = new Connection();

  // middleware
  app.use(express.json())
  app.use(express.urlencoded());
  app.use(cookies());

  // application level routes
  addRoutes(app);
}
