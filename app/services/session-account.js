import Service from '@ember/service';
import Ember from 'ember'
const { inject: { service }, RSVP } = Ember;
export default Service.extend({
session: service('session'),
  store: service(),

  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const token = this.get('session.data.authenticated.token');
      if (!Ember.isEmpty(token)) {
        return this.get('store').findRecord('employee', 'current-user').then((employee) => {
          this.set('account', employee);
          resolve();
        }, reject);
      } else {
        resolve();
      }
    });
  }
});