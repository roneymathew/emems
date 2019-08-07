import Route from '@ember/routing/route';

export default Route.extend({

  
	trackPageLeaveAnalytics: Ember.on('deactivate', function(){
		jsPlumb.reset();
		
		var controller = this.get('controller');
        controller.set('boss',null);
        controller.set('sameBoss',null);
        controller.set('unders',null);

		// console.log(boss)

  }),
	onScroll: function() {
            alert('scrolled');
	
},
actions: {
        onScroll: function() {
            alert('scrolled');
        }
    }
});
