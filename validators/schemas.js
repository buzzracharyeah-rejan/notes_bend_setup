import joiDate from '@joi/date';
import objectId from 'joi-objectid';
import joi from 'joi';

let Joi = joi.extend(joiDate);

Joi.objectId = objectId(Joi);

const stringSchema = Joi.string().required();

const positiveIntegerSchema = Joi.number().integer().min(1);

const emailSchema = Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  .lowercase();

const phoneSchema = Joi.string()
  .min(7)
  .max(12)
  .pattern(/^[+,0-9]+$/);

const urlSchema = Joi.string().uri();

const dateSchema = Joi.date().format(['YYYY/MM/DD', 'YYYY-MM-DD']);

const timeSchema = Joi.date().format(['HH:mm:ss']);

const dateAndTimeSchema = Joi.date();

const arraySchema = Joi.array();

const objectIdSchema = Joi.objectId();

export {
  stringSchema,
  positiveIntegerSchema,
  emailSchema,
  phoneSchema,
  urlSchema,
  dateSchema,
  timeSchema,
  dateAndTimeSchema,
  arraySchema,
  objectIdSchema,
};
