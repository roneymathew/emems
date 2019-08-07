import DS from 'ember-data';

const { attr  } = DS;
export default DS.Model.extend({
	is_staff: attr('boolean'),
	last_login: attr('date'),
	username: attr('string'),
	first_name: attr('string'),
	last_name: attr('string'),
	email: attr('string'),
	employee: DS.belongsTo('employee')
	
	

});
