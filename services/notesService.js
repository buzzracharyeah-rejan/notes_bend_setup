import NotesRepository from '../repository/notesRepository';

class NotesService {
  constructor() {
    this.notesRepository = new NotesRepository();
  }

  async create(payload) {
    return this.notesRepository.create(payload);
  }

  async findAll() {
    return this.notesRepository.find();
  }

  async findOne(id) {
    const note = await this.notesRepository.findById(id);
    if (!note) {
      throw new Error('Invalid noteId!');
    }
    return note;
  }

  async update(id, payload) {
    const note = await this.notesRepository.findById(id);
    if (!note) {
      throw new Error('Invalid noteId!');
    }
    return this.notesRepository.updateById(id, payload, { new: true });
  }

  async delete(id) {
    const note = await this.notesRepository.deleteById(id);
    if (!note) {
      throw new Error('Invalid noteId!');
    }
    return true;
  }
}

export default NotesService;
