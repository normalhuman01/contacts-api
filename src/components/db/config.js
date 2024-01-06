require('dotenv').config();

export default {
  [process.env.NODE_ENV]: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'NdElH5&%p&99',
    database: process.env.DB_NAME || 'core',
    host: process.env.DB_HOST || 'test.crd8r1ni7wnx.us-east-1.rds.amazonaws.com',
    dialect: process.env.DB_DIALECT || 'mysql',
    port: process.env.DB_PORT || 3306
  }
};