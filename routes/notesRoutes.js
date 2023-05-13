import RouterClass from '../classes/routerClass.js';
import exceptionHandler from '../middlewares/exceptionHandler.js';
import { notesController } from '../controllers/notesController.js';
import { Validator } from '../middlewares/validator.js';
import { createNotes, updateNotes } from '../validators/notesValidator.js';

class NotesRouter extends RouterClass {
  constructor() {
    super();
  }

  define() {
    this.router.get('/', exceptionHandler(notesController.listNotes));
    this.router.get('/:id', exceptionHandler(notesController.getNote));
    this.router.post(
      '/create',
      Validator.check(createNotes),
      exceptionHandler(notesController.createNotes)
    );
    this.router.post(
      '/update/:id',
      Validator.check(updateNotes),
      exceptionHandler(notesController.updateNotes)
    );
    this.router.delete('/delete/:id', exceptionHandler(notesController.deleteNotes));
  }
}
export default NotesRouter;
