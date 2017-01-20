angular.module("app.services",[]).
factory("appService",["$http","$location","Constants",function($http,$location,Constants){
	var appService={};
	
	getURL=function(url){
		var BASE_PATH=(window.location.hostname=="localhost")?
		Constants.BASE_PATH_LOCAL:Constants.BASE_PATH;
		console.log("url: "+BASE_PATH+url);
		return BASE_PATH+url;
	}
	
	appService.Consultar=function(date){
		return $http({
		  method: 'POST',
		  url: getURL(Constants.URL_LISTAR_RECAUDOS),
		  data:$.param({ fecha_inicio: date,fecha_fin:date }),
		  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
		});
	}
	return appService;
}]);