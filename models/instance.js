import mongoose from 'mongoose';
import { config } from '../config';

class DBInstance {
  constructor() {}

  static get() {
    if (!DBInstance.instance) {
      this.instance = new DBInstance();
    }
    return this.instance;
  }

  async connnection() {
    try {
      await mongoose.connect(config.development.mongodb_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to DB');
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export const database = DBInstance.get();
