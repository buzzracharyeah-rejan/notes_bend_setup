import { TOKEN } from '../constants';
import authJwt from '../middlewares/authJwt';
import Token from '../models/deviceToken';
import DeviceTokenRepository from '../repository/deviceTokenRepository';
import UserRepository from '../repository/userRepository';
import authJwtUtils from '../utils/authJwt';

class AuthService {
  constructor() {
    this.userRepository = new UserRepository();
    this.deviceTokenRepository = new DeviceTokenRepository();
  }

  async create(username, email, password) {
    try {
      let user = await this.userRepository.findOne({ username });
      if (user) {
        throw new Error('Failed! username is already in use!');
      }

      user = await this.userRepository.findOne({ email });
      if (user) {
        throw new Error('Failed! email is already in use!');
      }

      // Create a new user
      const newUser = await this.userRepository.create({ username, email, password });
      const accessTkn = await authJwt.issueAccessToken({ payload: { userid: newUser._id } }, '1h');
      const refrehsTkn = await authJwt.issueRefreshToken(
        { payload: { userid: newUser._id } },
        '30d'
      );

      // Save device token
      await this.deviceTokenRepository.createMany([
        {
          token: accessTkn,
          user_id: newUser._id,
          token_type: TOKEN.access_token,
          expires_in: new Date().getTime() + 60 * 60 * 1000,
        },
        {
          token: refrehsTkn,
          user_id: newUser._id,
          token_type: TOKEN.refresh_token,
          expires_in: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
        },
      ]);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async login(email, password) {
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      throw new Error('Invalid username or password');
    }

    const isValidPass = await user.comparePassword(password);
    if (!isValidPass) {
      throw new Error('Invalid username or password');
    }

    const accessTk = await authJwtUtils.tokenExists(user._id, TOKEN.access_token);
    const refreshTk = await authJwtUtils.tokenExists(user._id, TOKEN.refresh_token);

    return {
      user,
      token: {
        refresh: refreshTk,
        access: accessTk,
      },
    };
  }
}

export default AuthService;
