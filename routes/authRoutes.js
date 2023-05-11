import RouterClass from '../classes/routerClass.js';
import { authController } from '../controllers/authContoller.js';
import exceptionHandler from '../middlewares/exceptionHandler.js';
import { Validator } from '../middlewares/validator.js';
import { login as loginCheck, signup as signupCheck } from '../validators/userValidator.js';

class UserRouter extends RouterClass {
  constructor() {
    super();
  }

  define() {
    this.router.post('/login', Validator.check(loginCheck), exceptionHandler(authController.login));
    this.router.post(
      '/signup',
      Validator.check(signupCheck),
      exceptionHandler(authController.signup)
    );
  }
}
export default UserRouter;
