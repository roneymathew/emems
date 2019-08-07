
import Route from '@ember/routing/route';
//import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';


export default Route.extend({
	model() {
  
		return this.store.findAll('employee');
	},
	sessionAuthenticated() {
    this._loadCurrentUser().then(()=>{
      this.transitionTo('/employee');
    }).catch(() => this.get('session').invalidate());
  },

  _loadCurrentUser() {
    return this.get('sessionAccount').loadCurrentUser();
  },

	
  
});
