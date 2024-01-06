import contactRoutes from './app/contacts/routes';
import formRoutes from './app/form-fields/routes';

export default [
  {
    path: '/contacts',
    handler: contactRoutes
  },
  {
    path: '/form-fields',
    handler: formRoutes
  }
];