export default {
  mongo: {
    retries: +process.env.MONGO_RETRIES || 5,
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/rankr',
  },
  server: {
    port: process.env.SERVER_PORT || 3333,
  },
  auth: {
    domain: process.env.AUTH_DOMAIN,
    audience: process.env.AUTH_AUDIENCE,
  },
};
