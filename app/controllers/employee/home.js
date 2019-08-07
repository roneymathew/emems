import Controller from '@ember/controller';
import { computed } from '@ember/object';
//import $ from 'jquery';
const { $: { ajax } } = Ember;
const { inject: { service }, RSVP } = Ember;
export default Controller.extend({
ajax: Ember.inject.service(),
session: Ember.inject.service(),
  actions: {
    delete: function(id){
     // var self = this;
     const session1=this.get('session');
          const token = session1.data.authenticated.token
      const option={
             url: 'http://localhost:8000/api/empapi/'+id+'/',
             method: 'DELETE',
             contentType: 'application/json',
             beforeSend: function (xhr) {   //Include the bearer token in header
        xhr.setRequestHeader("Authorization", 'Bearer '+ token);
    },
            }
            ajax( option);
            window.location.reload(true);
      },
      // search(){
      //   var self=this;
      //   var param=this.get('filter');
      //   if(!param){
      //     this.store.query('employee',{search:param}.then(function(result){
      //       self.set('filteredItems',)
      //     }))
      //   }
      // }
  },
  filter:'',
  filteredItems: computed('filter',function(){
    const filterTerm=this.get('filter');
    var model=this.get('model');
    var filtered=model.filter( function(list){
      return list.get('user.first_name').indexOf(filterTerm) !==-1;
    });
    return filtered;
  })
});
