(function(){
	var auto = angular.module('auto',[]);
	auto.directive('autofocus',['$location',function($location){
//		console.log($location);
		return{
			restrict:'A',
			link:function(scope,ele,attrs){
				scope.$location = $location;
				scope.$watch('$location.path()',function(now){
					var aLink = ele.children().attr('href');
					var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');
					if(now.startsWith(type)){
						console.log(type);
						ele.parent().children().removeClass("active");
						ele.addClass("active");
					}
					
				})
			}
		}
	}])
})()
