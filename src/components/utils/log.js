import bunyan from 'bunyan';

const log = bunyan.createLogger({ name: 'contacts-api' });

export default log;