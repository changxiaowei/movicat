(function(){
	'use strict'
	var movie = angular.module('movieApp',['ngRoute','detail','movieList','auto']);
//	movie.constant('movieConstant',);
	movie.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.otherwise({redirectTo:'/in_theaters/1'})
	}]);
	movie.constant('movConstant',{
		count:5
	})
//	movie.controller('movieController',['$route','$scope','$location',function($route,$scope,$location){
////		console.log($location.path())
//      $scope.input = '';
//      //search
//      $scope.search = function(){
////      	$route.updateParams({category:search,q:$scope.input});
////      	console.log(111);
//      }
//      
//	}]);
   movie.controller('movieController',['$scope','$route',function($scope,$route){
   	$scope.input = '';
   	$scope.search = function(){
   		$route.updateParams({category:"search",q:$scope.input});
   	}
   }])
	
})()
