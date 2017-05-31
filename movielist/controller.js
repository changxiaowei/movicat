(function(){
	'use strict'
	var List = angular.module('movieList',['ngRoute','httpjsonp']);
	List.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/:category/:pages',{
			templateUrl:'./movielist/view.html',
			controller:'ListCon'
		})
	}]);
	List.controller('ListCon',[
	'$scope','serviceHttp','$routeParams','$route','movConstant',
	function($scope,serviceHttp,$routeParams,$route,movConstant){
		$scope.data = {};
		$scope.title = '';
		$scope.loading = true;
		$scope.current = '';
		var count = movConstant.count;
		$scope.currentPage = parseInt($routeParams.pages);
//		console.log(currentPage);
		var start = ($scope.currentPage - 1 )*count;
		$scope.total = '';
		serviceHttp.jsonp(
			'http://api.douban.com/v2/movie/'+$routeParams.category,
			{count:count,start:start,q:$routeParams.q},
			function(data){
				$scope.data = data;
				$scope.title = data.title;
				$scope.loading = false;
				$scope.total = data.total;
				$scope.totalPage = Math.ceil($scope.total/count);
//				console.log($scope.total)
				$scope.$apply(data);
//				console.log(data)
			}
		)
	   
	    
	    $scope.go =function(num){
	    	console.log(num)
	    	if(num>=1&&num<=$scope.totalPage){
	    		$route.updateParams({pages:num})
	    	}
	    	
	    }
	}]);
})()
