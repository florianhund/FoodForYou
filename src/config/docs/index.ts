import basicInfo from './basicInfo';
import components from './components';
import server from './server';
import tags from './tags';
import auth from './endpoints/auth';
import orders from './endpoints/orders';
import users from './endpoints/users';
import meals from './endpoints/meals';

export default {
  ...basicInfo,
  ...server,
  ...tags,
  ...components,
  paths: {
    '/meals': meals.base,
    '/meals/{id}': meals.id,
    '/users': users.base,
    '/users/{id}': users.id,
    '/users/{id}/send-verification': users.sendVerification,
    '/users/{id}/verify': users.verify,
    '/auth/google': auth.google,
    '/auth/facebook': auth.facebook,
    '/auth/login': auth.login,
    '/auth/logout': auth.logout,
    '/orders': orders.base,
    '/orders/:id': orders.id
  }
};
