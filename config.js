module.exports = () => {
    config = {
        db: {
            host:     process.env.DB_HOST || 'localhost',
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || 'pass',
            database: process.env.DB_NAME || 'users',
            dialect:  process.env.DB_DIALECT || 'mysql',
            logging:  ('true' === process.env.DB_LOGGING) ? console.log : false

        }
    }    
    return config;
}
