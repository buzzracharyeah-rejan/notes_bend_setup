import RouterClass from '../classes/routerClass.js';
import exceptionHandler from '../middlewares/exceptionHandler.js';
import { createNotes } from '../controllers/notesController.js';

class NotesRouter extends RouterClass {
  constructor() {
    super();
  }

  define() {
    this.router.get('/create', exceptionHandler(createNotes));
  }
}
export default NotesRouter;
