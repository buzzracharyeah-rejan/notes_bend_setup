import AuthService from '../services/authService';

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const { user, token } = await new AuthService().login(email, password);
  res.status(200).send({
    status: 'success',
    message: 'user login success!',
    data: {
      user,
      token,
    },
  });
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  await new AuthService().create(username, email, password);
  res.status(201).json({ status: 'success', message: 'user signup success!' });
};
