import Ember from 'ember';  
import Base from 'ember-simple-auth/authenticators/base';  
import config from '../config/environment';
const { RSVP: { Promise }, $: { ajax }, run } = Ember;
export default Base.extend({  
  tokenEndpoint: `${config.host}/login/`,
  restore(data) {
    return new Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate(creds) {

    const { identification, password } = creds;
    const data = JSON.stringify({
        'username':identification,
        'password':password
    });
    const requestOptions = {
      url: this.tokenEndpoint,
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json',
      
      

    };

    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        const { token ,user } = response;
        // Wrapping aync operation in Ember.run
        run(() => {
          resolve({
            token: token,
            user: user
            
          });
        });
      }, (error) => {
        // Wrapping aync operation in Ember.run
        run(() => {
          reject(error);
        });
      });
    });
  },
  //invalidate(data) {
    //console.log('jws.js')
    //return Promise.resolve(data);
  //}
});