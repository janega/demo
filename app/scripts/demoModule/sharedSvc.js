(function() {
    'use strict';

    
    function sharedSvc($http) {
    
        var service = {};
        service.lookUpData={};
        service.stock={};
        
       service.lookUp = function (symbol) {
            return  $http.jsonp('http://dev.markitondemand.com/Api/v2/Lookup/jsonp?input='+ symbol +'&callback=JSON_CALLBACK')
                    .success(function(data){
                           service.lookUpData = data; 
                    })
                    .error(function(err){
                        console.log(err);
                    });
             
        };

       service.getStockQuote = function(exchange,symbol){
                
           return $http.get('http://finance.google.com/finance/info?client=ig&q=' + exchange + ':' + symbol)
                   .success(function(data){
                         var stockObj = angular.fromJson(data.replace('//', ''));
                         service.stock = stockObj;

                    })
                    .error(function(err){
                        console.log(err);
                    });        
       };
       
    
        return service;
    }
    
    angular.module('sharedModule')
        .factory('sharedSvc',sharedSvc);        
         
    sharedSvc.$inject = ['$http'];
})();