import RouterClass from '../classes/routerClass.js';
import exceptionHandler from '../middlewares/exceptionHandler.js';
import { notesController } from '../controllers/notesController.js';
import { Validator } from '../middlewares/validator.js';
import { createNotes } from '../validators/notesValidator.js';

class NotesRouter extends RouterClass {
  constructor() {
    super();
  }

  define() {
    this.router.post(
      '/create',
      Validator.check(createNotes),
      exceptionHandler(notesController.createNotes)
    );
  }
}
export default NotesRouter;
