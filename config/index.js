import dotenv from 'dotenv';
dotenv.config();

export const config = {
  development: {
    mongodb_uri: process.env.MONGODB_URI,
    port: process.env.PORT,
    accessKey: process.env.ACCESS_KEY_SECRET,
    refreshKey: process.env.REFRESH_KEY_SECRET,
    salt: process.env.SALT_WORK_FACTOR,
  },
};
