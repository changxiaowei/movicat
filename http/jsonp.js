(function(){
	'use strict'
	var http = angular.module('httpjsonp',[]);
	http.service('serviceHttp',['$document','$window',function($document,$window){
		this.jsonp = function(url,data,callback){
			var random ='my_jsonp_' +  Math.random().toString().replace(".","");
			var funName = url.indexOf('?') == -1 ? '?' : '&';
			for (var k in data) {
				funName += k + '=' + data[k] + '&';
			}
			funName += 'callback=' + random;
			var scripts = $document[0].createElement('script');
			scripts.src = url + funName;
			$window[random] = function(data){
				callback(data);
				$document[0].body.removeChild(scripts);
			}
			$document[0].body.append(scripts);
			
		}
	}])
})()
