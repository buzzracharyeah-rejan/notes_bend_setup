import Joi from 'joi';
import { objectIdSchema, stringSchema } from './schemas';

const createNotes = Joi.object({
  title: stringSchema.label('Title'),
  body: stringSchema.label('Body'),
  image_url: stringSchema.label('Image URL'),
  author: objectIdSchema.label('Author Id').required(),
});

const updateNotes = Joi.object({
  title: stringSchema.label('Title'),
  body: stringSchema.label('Body'),
  image_url: stringSchema.label('Image URL'),
  author: stringSchema.label('Author Id'),
});

export { createNotes, updateNotes };
