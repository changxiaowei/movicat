(function(){
	'use strict'
	var detail = angular.module('detail',['ngRoute','httpjsonp']);
	detail.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/chang/:id',{
			templateUrl:'./detail/view.html',
			controller:'detailCon'
		})
	}]);
	detail.controller('detailCon',['$scope','$routeParams','serviceHttp',function($scope,$routeParams,serviceHttp){
		$scope.title = '';
		serviceHttp.jsonp(
			'http://api.douban.com/v2/movie/subject/'+$routeParams.id,
			{},
			function(data){
//				console.log(data);
                $scope.data = data;
                $scope.$apply(data);
			}
			)
	}])
})()
