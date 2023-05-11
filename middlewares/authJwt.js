// Import required modules
import jwt from 'jsonwebtoken';
import { config } from '../config';

console.log(config.development);
class JwtMiddleware {
  constructor() {
    this.refreshKey = config.development.refreshKey;
    this.accessKey = config.development.accessKey;
  }

  static get() {
    if (!JwtMiddleware.instance) {
      this.instance = new JwtMiddleware();
    }
    return this.instance;
  }

  issueAccessToken(payload, expiresIn) {
    return jwt.sign(payload, this.accessKey, { expiresIn });
  }

  issueRefreshToken(payload, expiresIn) {
    return jwt.sign(payload, this.refreshKey, { expiresIn });
  }

  verifyAccessToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, this.accessKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
      }

      // Attach the decoded payload to the request object
      req.user = decoded;

      // Move to the next middleware or route handler
      next();
    });
  }

  verifyRefreshToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, this.refreshKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
      }

      // Attach the decoded payload to the request object
      req.user = decoded;

      // Move to the next middleware or route handler
      next();
    });
  }
}

const authJwt = JwtMiddleware.get();
export default authJwt;
