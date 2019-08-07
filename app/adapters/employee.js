import DRFAdapter from './drf';
//import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';  
//import config from '../config/environment';


export default DRFAdapter.extend(DataAdapterMixin,{
	
	host : 'http://localhost:8000',
	authorizer: 'authorizer:custom',

	pathForType() {
		return 'empapi'
  }
});
