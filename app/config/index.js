if (!process.env.MONGO_URI) {
  throw new Error("Missing required environment variable: MONGO_URI");
}

const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    url: process.env.MONGO_URI,
  },
};

export default config;