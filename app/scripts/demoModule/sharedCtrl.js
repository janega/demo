(function(){
    
    'use strict';
    
    function sharedCtrl($scope,sharedSvc){
        $scope.stock='';//This is our model object
        $scope.stockLookups= [];
        $scope.stocks= [];
        
        
        $scope.lookupStocks = function(symbol){
            
            sharedSvc.lookUp(symbol)
             .then(function(){
                  $scope.stockLookups = sharedSvc.lookUpData; 
               
             },
             function(){
                //to handle errors
             });
            
            return $scope.stockLookups; 
        };
        
         $scope.getStockQuote = function () {
            sharedSvc.getStockQuote($scope.stock.Exchange, $scope.stock.Symbol)
            .then(function(){
                var newStock = sharedSvc.stock; 
                newStock[0].symbol = $scope.stock.Symbol;
                newStock[0].name =  $scope.stock.Name;
                newStock[0].exchange =  $scope.stock.Exchange;
                
                $scope.stocks.push(newStock[0]); 
                $scope.stock='';
            });   
        };
        
        
    }    
    
    angular.module('sharedModule')
        .controller('sharedCtrl',sharedCtrl);
    
        sharedCtrl.$inject =['$scope','sharedSvc'];
    
})();