import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	session: service('session'),
	sessionAccount: service(),

	actions: {
    logout: function() {
        var _this = this;
        this.get('session').invalidate();
        _this.transitionToRoute('login');
    },
}
});
