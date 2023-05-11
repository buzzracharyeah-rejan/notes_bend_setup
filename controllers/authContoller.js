import AuthService from '../services/authService';

export const login = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'user login successful',
  });
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  await new AuthService().create(username, email, password);
  res.status(201).json({ status: 'success', message: 'user signup success!' });
};
