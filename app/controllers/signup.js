/*import Controller from '@ember/controller';

export default Controller.extend({
	model: function(){
		return Ember.Object.create({identification:'',password:''});
	},
	setupController:function(controller,model){
		controller.set('credentials',model);
	},
	session: Ember.inject.service(),
	actions: {
		signup: function() {

			var _this = this;
			var credentials = this.getProperties('identification','password','password1'),
			const data = JSON.stringify({
        		'username':identification,
        		'password1':password,
        		'password2':password1
    });
    const requestOptions = {
      url: 'http://localhost:8000/egistration/',
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };

    
      ajax(requestOptions).then((response) => {
        const { token } = response;
        // Wrapping aync operation in Ember.run
        run(() => {
          resolve({
            token: token
          });
        });
      }, (error) => {
        // Wrapping aync operation in Ember.run
        run(() => {
          reject(error);
        });
      });
    
			
			this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
				this.set('errorMessage', reason.error || reason)}).then(
          function(response) {
            console.log(_this.get('session')); // this correctly gets the session
            if !errorMessage:
            	_this.transitionToRoute('employee');
            }
        );
				
			
		}
	}
});
*/