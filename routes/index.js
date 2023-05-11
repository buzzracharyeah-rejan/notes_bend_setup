import { Router } from 'express';
import NotesRouter from './notesRoutes.js';
import UserRouter from './authRoutes.js';

class ProxyRouter {
  routes = [
    { segment: '/auth', provider: UserRouter },
    { segment: '/notes', provider: NotesRouter },
  ];

  constructor() {
    this.router = Router();
  }

  static get() {
    if (!ProxyRouter.instance) {
      this.instance = new ProxyRouter();
    }
    return this.instance;
  }

  map() {
    this.routes.forEach((route) => {
      const instance = new route.provider();
      this.router.use(route.segment, instance.router);
    });
    return this.router;
  }
}

const proxyRouter = ProxyRouter.get();

export default proxyRouter;
