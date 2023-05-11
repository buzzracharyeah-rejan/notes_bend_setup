import NotesService from '../services/notesService';

const createNotes = async (req, res, next) => {
  const note = await new NotesService().create(req.body);
  res.status(200).json({
    status: 'success',
    message: 'notes created successful',
    data: note,
  });
};

const updateNotes = async (req, res, next) => {
  const targetId = req.params.id;
  const updated = await new NotesService().update(targetId, req.body);
  res.status(200).json({
    status: 'success',
    message: 'notes updated successful',
    data: updated,
  });
};

const deleteNotes = async (req, res, next) => {
  const id = req.params.id;
  await new NotesService().delete(id);
  res.status(200).json({
    status: 'success',
    message: 'Note deleted successful',
  });
};

const listNotes = async (req, res, next) => {
  const notes = await new NotesService().findAll();
  res.status(200).json({
    status: 'success',
    message: 'Note listings',
    data: notes,
  });
};

export const notesController = {
  createNotes,
  updateNotes,
  deleteNotes,
  listNotes,
};
