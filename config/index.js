import dotenv from 'dotenv';
dotenv.config();

export const config = {
  development: {
    mongodb_uri: process.env.MONGODB_URI,
    port: process.env.PORT,
  },
};
