import RouterClass from '../classes/routerClass.js';
import exceptionHandler from '../middlewares/exceptionHandler.js';
import { login, signup } from '../controllers/authContoller.js';

class UserRouter extends RouterClass {
  constructor() {
    super();
  }

  define() {
    this.router.get('/login', exceptionHandler(login));
    this.router.post('/signup', exceptionHandler(signup));
  }
}
export default UserRouter;
