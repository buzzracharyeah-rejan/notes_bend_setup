import dotenv from 'dotenv';
dotenv.config();

export const config = {
  development: {
    mongodb_uri: process.env.MONGODB_URI,
    port: process.env.PORT,
    accessKey: process.env.ACCESS_KEY_SERCRET,
    refreshKey: process.env.REFRESH_KEY_SERCRET,
  },
};
