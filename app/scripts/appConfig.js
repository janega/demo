(function ()
{
'use strict';
  
  function myrouterConfig($stateProvider,$urlRouterProvider,$authProvider)
  {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
        });    

        $urlRouterProvider.otherwise('/'); 
      
      
      //authProider Stuff
      $authProvider.google({
      clientId: '694384046277-77v33funeioq08e2dnufiv8t8565r3if.apps.googleusercontent.com'
    });
      
      
      
/*      $authProvider.httpInterceptor = true; // Add Authorization header to HTTP request
$authProvider.loginOnSignup = true;
$authProvider.baseUrl = '/'; // API Base URL for the paths below.
$authProvider.loginRedirect = '/';
$authProvider.logoutRedirect = '/';
$authProvider.signupRedirect = '/login';
$authProvider.loginUrl = '/auth/login';
$authProvider.signupUrl = '/auth/signup';
$authProvider.loginRoute = '/login';
$authProvider.signupRoute = '/signup';
$authProvider.tokenRoot = false; // set the token parent element if the token is not the JSON root
$authProvider.tokenName = 'token';
$authProvider.tokenPrefix = 'satellizer'; // Local Storage name prefix
$authProvider.unlinkUrl = '/auth/unlink/';
$authProvider.unlinkMethod = 'get';
$authProvider.authHeader = 'Authorization';
$authProvider.authToken = 'Bearer';
$authProvider.withCredentials = true;
$authProvider.platform = 'browser'; // or 'mobile'
$authProvider.storage = 'localStorage'; // or 'sessionStorage'*/
      
      
/*      $authProvider.google({
  url: '/auth/google',
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
  redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
  scope: ['profile', 'email'];
  scopePrefix: 'openid';
  scopeDelimiter: ' ',
  requiredUrlParams: ['scope'],
  optionalUrlParams: ['display'],
  display: 'popup',
  type: '2.0',
  popupOptions: { width: 580, height: 400 }
});*/

  }
  
    angular.module('demoApp')
  .config(myrouterConfig); 
        
  myrouterConfig.$inject = ['$stateProvider','$urlRouterProvider','$authProvider'];
    

})();