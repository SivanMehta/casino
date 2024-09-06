import { load } from './dummyData.js';

export default class Connection {
  constructor() {
    // this is a "database" connection, we'll use a Map for now
    this.db = new Map();
    load(this.db);
  }

  // should in reality be queued and processed asynchronously,
  // but we'll keep it simple for now
  async get(key) {
    return this.db.get(key);
  }

  async set(key, value) {
    this.db.set(key, value);
  }

  async getAllGames() {
    return Object.fromEntries(this.db);
  }
}
