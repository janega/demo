(function (){
'use strict';
  
  function myrouterConfig($stateProvider, $urlRouterProvider)
  {

    $stateProvider
        .state('admin', {
            url: '/',
            templateUrl: 'views/adminMain.html'
        });    

        $urlRouterProvider.otherwise('/');  

  }
    
    angular.module('adminApp')
  .config(myrouterConfig); 
  
  myrouterConfig.$inject = ['$stateProvider','$urlRouterProvider'];
    
})();