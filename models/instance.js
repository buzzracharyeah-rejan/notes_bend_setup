import mongoose from 'mongoose';
import { config } from '../config';

class DBInstance {
  constructor() {
    this.conn = mongoose.createConnection(config.development.mongodb_uri);
  }

  static get() {
    if (!DBInstance.instance) {
      this.instance = new DBInstance();
    }
    return this.instance;
  }

  async connnection() {
    try {
      await this.conn.asPromise();
      console.log('Connected to DB');
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export const database = DBInstance.get();
