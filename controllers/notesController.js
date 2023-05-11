export const createNotes = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'notes successful',
  });
};
