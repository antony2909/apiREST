
module.exports = () => {
	const config = {
		db: {
			host:     process.env.DB_HOST || 'localhost',
			username: process.env.DB_USERNAME || 'root',
			password: process.env.DB_PASSWORD || 'Test1234!',
			database: process.env.DB_NAME || 'user_db',
			dialect:  process.env.DB_DIALECT || 'mysql',
			logging:  ('true' === process.env.DB_LOGGING) ? console.log : false

		}
	};
	return config;
};

