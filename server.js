import express from 'express';
import { config } from './config/index.js';
import { database } from './models/instance.js';
import proxyRouter from './routes/index.js';

class Server {
  constructor() {
    this.app = express();
    this.configuration();
  }

  static get() {
    if (!Server.instance) {
      this.instance = new Server();
    }
    return this.instance;
  }

  configuration() {
    this.app.set('port', config.development.port);
    this.app.use('/api/v1', proxyRouter.map());
  }

  async connectDB() {
    await database.connnection();
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      this.connectDB();
      console.log(`Server up PORT: ${this.app.get('port')}`);
    });
  }
}

const expressApp = Server.get();
expressApp.start();
