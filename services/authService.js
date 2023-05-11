import { TOKEN } from '../constants';
import authJwt from '../middlewares/authJwt';
import Token from '../models/deviceToken';
import DeviceTokenRepository from '../repository/deviceTokenRepository';
import UserRepository from '../repository/userRepository';

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
        { token: accessTkn, user_id: newUser._id, token_type: TOKEN.access_token },
        { token: refrehsTkn, user_id: newUser._id, token_type: TOKEN.refresh_token },
      ]);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export default AuthService;
