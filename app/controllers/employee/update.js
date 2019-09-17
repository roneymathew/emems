import Controller from '@ember/controller';
//import DS from 'ember-data';
import Ember from 'ember'
const { $: { ajax }, } = Ember;
const { inject: { service }, RSVP } = Ember;
export default Controller.extend({
ajax: Ember.inject.service(),
session: Ember.inject.service(),
  actions: {
    updateList: function(id){
      var self = this;
      

      var first_name = this.get('model.user.first_name');
      var last_name = this.get('model.user.last_name');
      var empid =this.get('model.empid');      
      var housename =this.get('model.housename');
      var city =this.get('model.city');
      var state =this.get('model.state');
      var pincode =this.get('model.pincode');
      var mobile=this.get('model.mobile');
      var email =this.get('model.user.email');
     
      


      /*this.get('store').findRecord('employee', id).then(function(tyrion) {
        tyrion.set('empid', empid);
        tyrion.set('housename', housename);
        tyrion.set('city',city );
        tyrion.set('state',state );
        tyrion.set('pincode',pincode );
        tyrion.set('mobile',mobile );
        tyrion.user.set('first_name', first_name);
        tyrion.user.set('last_name', last_name);
          
             
          
      
        
        
          
          tyrion.save();*/

         const session1=this.get('session');
          const token = session1.data.authenticated.token
          //console.log(token);
          const option={
             url: 'http://localhost:8000/api/empapi/'+id+'/',
            method: 'PUT',
        contentType: 'application/json',
        AccessControlRequestHeaders: 'authorization,content-type',
        AccessControlRequestMethod: 'PUT',
       beforeSend: function (xhr) {   //Include the bearer token in header
        xhr.setRequestHeader("Authorization", 'Bearer '+ token);
    },
        success: function() {
               
               //console.log(data);
               self.replaceRoute('employee.home');
           },
        error: function(data) {
          console.log(data)
          if (data.responseJSON.user.email)
          {
               alert(data.responseJSON.user.email)
             }
          if (data.responseJSON.user.first_name)
              { alert(data.responseJSON.user.first_name)
              }
       },
        dataType: 'json',
        data:JSON.stringify( {
              "id": id,
              "housename": housename,
              "city":city,
              "state": state,
              "pincode":pincode,
              "mobile": mobile,
              "empid": empid,
              "user": {
               
                  "email": email,
                  "is_superuser":false,
                  "first_name": first_name,
                  "last_name": last_name,
                  "is_staff": false,
                  
                
                  },
              "user_id": 9}
              )};

          ajax( option);
          
    }
  }

});
