import User from '../models/users';
import { BaseRepo } from './base';

class UserRepository extends BaseRepo {
  constructor() {
    super(User);
  }
}

export default UserRepository;
