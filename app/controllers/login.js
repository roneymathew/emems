
import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
	session: Ember.inject.service(),
	redirect: function () {
    this.transitionTo('employee');
  },
	model: function(){
		return Ember.Object.create({identification:'',password:''});
	},
	setupController:function(controller,model){
		controller.set('credentials',model);
	},
	
	actions: {
		authenticate: function() {
			var _this = this;
			var credentials = this.getProperties('identification','password'),
			authenticator = 'authenticator:jwt';
			
			this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
				this.set('errorMessage', reason.responseJSON.responseText || reason)}).then(
          function() {
            // this correctly gets the session
            _this.transitionToRoute('employee');
            }
        );
				
			
		}
	}
});
