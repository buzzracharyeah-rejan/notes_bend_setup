import User from '../models/users';

class VerifySignup {
  constructor() {}

  static get() {
    if (!this.instance) {
      this.instance = new VerifySignup();
    }
  }

  checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const { username, email } = req.body;
    try {
      let user = await User.findOne({ username });
      if (user) {
        res.status(400).send({ message: 'Failed! username is already in use!' });
      }

      user = await User.findOne({ email });
      if (user) {
        return res.status(400).send({ message: 'Failed! eamil is already in use!' });
      }
      next();
    } catch (error) {
      return res.status(500).send({
        message: 'Unable to validate username!',
      });
    }
  };
}

export const verifySignup = VerifySignup.get();
