import { TOKEN } from '../constants';
import authJwt from '../middlewares/authJwt';
import DeviceTokenRepository from '../repository/deviceTokenRepository';

class AuthJwt {
  constructor() {
    this.deviceTokenRepository = new DeviceTokenRepository();
  }

  static get() {
    if (!this.AuthJwt) {
      this.instance = new AuthJwt();
    }
    return this.instance;
  }

  tokenExists = async (userId, tokenType) => {
    let existingToken = await this.deviceTokenRepository.findOne({
      user_id: userId,
      token_type: tokenType,
      expires_in: { $gt: new Date().getTime() },
    });

    if (!existingToken) {
      switch (tokenType) {
        case TOKEN.access_token:
          existingToken = {
            token: authJwt.issueAccessToken({ payload: { userId } }, '1h'),
            user_id: userId,
            token_type: TOKEN.access_token,
            expires_in: new Date().getTime() + 60 * 60 * 1000,
          };
          await this.deviceTokenRepository.create(existingToken);
          break;

        case TOKEN.refresh_token:
          existingToken = {
            token: authJwt.issueRefreshToken({ payload: { userId } }, '1h'),
            user_id: userId,
            token_type: TOKEN.refresh_token,
            expires_in: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
          };
          await this.deviceTokenRepository.create(existingToken);
          break;
      }
    }

    return existingToken;
  };
}

const authJwtUtils = AuthJwt.get();

export default authJwtUtils;
