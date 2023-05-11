import Note from '../models/notes';
import { BaseRepo } from './base';

class NotesRepository extends BaseRepo {
  constructor() {
    super(Note);
  }
}

export default NotesRepository;
