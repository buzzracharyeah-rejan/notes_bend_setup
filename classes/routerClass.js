import { Router } from 'express';

/* @Abstract class */
class RouterClass {
  constructor() {
    this.router = Router();
    this.define();
  }

  define() {}
}

export default RouterClass;
