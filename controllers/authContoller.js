export const login = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'user login successful',
  });
};
