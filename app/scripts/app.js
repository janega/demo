(function(){
'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
    //3rd party modules
    'ngAnimate',
    'ngCookies',
    'ui.router',
    'ui.bootstrap',
    //project modules
    'sharedModule',
    'satellizer'
  ]);
})();