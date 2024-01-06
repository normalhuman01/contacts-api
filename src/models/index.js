import Sequelize from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';
import dbCredentials from '../components/db/config';
import contacts from './contacts';
import formFields from './form-fields';

const dbConfig = dbCredentials[process.env.NODE_ENV];
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    dialect: dbConfig.dialect,
    host: dbConfig.host,
    port: dbConfig.port
  }
);

const models = {
  contacts: contacts.init(sequelize, Sequelize),
  formFields: formFields.init(sequelize, Sequelize)
};

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => {
    model.associate(models);
    sequelizePaginate.paginate(model);
  });

sequelize.sync(err => console.log('Error in sequelize sync: ', err));

export default {
  ...models,
  sequelize,
  Sequelize
};