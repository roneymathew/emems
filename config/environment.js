'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'emems',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV['simple-auth-token']={
    serverTokenEndpoint:'/login/',
    authorizer: 'authorizer:custom',
    tokenDataPropertyName: 'token', // Key in session to store token data
    refreshAccessTokens: true, // Enables access token refreshing
    tokenExpirationInvalidateSession: true, // Enables session invalidation on token expiration
    serverTokenRefreshEndpoint: 'refresh-token/', // Server endpoint to send refresh request
    refreshTokenPropertyName: 'Bearer', // Key in server response that contains the refresh token
    //tokenExpireName: 'exp', // Field containing token expiration
    refreshLeeway: 0 // Amount of time to send refresh request before token expiration
};

    
  
  ENV['ember-simple-auth'] = {  
    authorizer: 'authorizer:custom',
    refreshAccessTokens: true,
    serverTokenRefreshEndpoint: 'refresh-token/',
    refreshTokenPropertyName: 'Bearer',
    refreshLeeway: 0, 
    
};

  
  
  

  if (environment === 'development') {
     ENV.APP.API_HOST = 'http://localhost:8000';
     ENV.host= 'http://localhost:8000';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'https://api.myproject.com';
    ENV.APP.API_NAMESPACE = 'v2';
    // here you can enable a production-specific feature
  }


  return ENV;
};

