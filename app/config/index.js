const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        url: process.env.MONGO_URI || 'mongodb://localhost:27017/contactbook',
    }
};

export default config;