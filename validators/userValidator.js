import Joi from 'joi';
import { emailSchema, stringSchema } from './schemas';

const signup = Joi.object({
  username: stringSchema.label('Full Name'),
  email: emailSchema.label('Email'),
  password: stringSchema.label('Password'),
});

const login = Joi.object({
  email: emailSchema.label('Email'),
  password: stringSchema.label('Password'),
});

export { login, signup };
