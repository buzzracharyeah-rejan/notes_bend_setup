import Token from '../models/deviceToken';
import { BaseRepo } from './base';

class DeviceTokenRepository extends BaseRepo {
  constructor() {
    super(Token);
  }
}

export default DeviceTokenRepository;
