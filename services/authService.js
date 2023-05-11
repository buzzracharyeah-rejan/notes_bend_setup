import DeviceTokenRepository from "../repository/deviceTokenRepository";
import UserRepository from "../repository/userRepository";

class AuthService {
  constructor() {
    this.userRepository = new UserRepository(); 
    this.deviceTokenRepository = new DeviceTokenRepository()
  }
}


export default AuthService; 
