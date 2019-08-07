import Component from '@ember/component';

export default Component.extend({
	
	action:{
		logIn: function() {
			this.sendAction('action',this.get('credentials'));
		}
	}
});
