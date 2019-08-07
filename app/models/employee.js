//import Model from 'ember-data/model':
import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user'),
	empid: DS.attr('string'),
	city: DS.attr('string'),
	housename: DS.attr('string'),
	state: DS.attr('string'),
	pincode: DS.attr('number'),
	mobile: DS.attr('number'),
	
	user_id: DS.attr('number')



});
