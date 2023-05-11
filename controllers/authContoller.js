export const login = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'user login successful',
  });
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
};
