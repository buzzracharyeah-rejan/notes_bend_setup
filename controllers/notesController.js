const createNotes = async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: 'success',
    message: 'notes successful',
  });
};

export const notesController = {
  createNotes,
};
