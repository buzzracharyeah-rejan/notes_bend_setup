import RouterClass from '../classes/routerClass.js';
import exceptionHandler from '../middlewares/exceptionHandler.js';
import { login } from '../controllers/authContoller.js';

class UserRouter extends RouterClass {
  constructor() {
    super();
  }

  define() {
    this.router.get('/login', exceptionHandler(login));
  }
}
export default UserRouter;
