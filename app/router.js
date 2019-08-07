import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});


Router.map(function() {
  this.route('employee', function() {
    this.route('home');
    this.route('create');
    this.route('update',{path: 'update/:employee_id'});
  });
  
  //this.route('authenticated', { path: '' }, function() {
  // all routes that require the session to be authenticated
  //});
  this.route('task', function() {});

  this.route('login');
  this.route('signup');
});

export default Router;
