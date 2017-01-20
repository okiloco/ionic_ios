angular.module('app.constants',[]).
factory('Constants',['$http',function($http){
	return{
		BASE_PATH:'http://serviciorecaudo.construsenales.co/ToolsConstrusenales/',
		BASE_PATH_LOCAL:'http://localhost:8100/api/',
		URL_LISTAR_RECAUDOS:'webresources/recaudos/listarRecaudos'

	}
}]);