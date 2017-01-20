angular.module('app.controllers',[]).
controller("homeCtrl",["$scope","$filter","$location","appService","ionicDatePicker", "$ionicPopup", "$timeout", function($scope,$filter, $location,appService,ionicDatePicker, $ionicPopup, $timeout ){
	

	$scope.currentDate = $scope.currentDate = $filter('date')(new Date(),"yyyy-MM-dd");
	$scope.datos=[];
	$scope.total=0;

    $scope.openDatePicker = function (val) {
      var ipObj1 = {
        callback: function (val) {
          $scope.currentDate = $filter('date')(new Date(val),"yyyy-MM-dd");
          cargarDatos();
        },
        disabledDates: [
          new Date(1437719836326),
          new Date(2016, 1, 25),
          new Date(2015, 7, 10),
          new Date('Wednesday, August 12, 2015'),
          new Date("08-14-2015"),
          new Date(1439676000000),
          new Date(1456511400000)
        ],
        from: new Date(2012, 8, 2),
        to: new Date(2018, 8, 25),
        inputDate: new Date(),
        mondayFirst: true,
        disableWeekdays: [0, 6],
        showTodayButton: false,
        closeOnSelect: false,
        templateType: 'popup'
      };
      ionicDatePicker.openDatePicker(ipObj1);
    }

     cargarDatos =function(){

    	appService.Consultar($scope.currentDate)
    	.then(function successCallback(response) {
 			var result=response.data;
		    if(result.success){
		    	$scope.datos=result.data;
		    	getTotal();
		    }else{
		    	$scope.showModal({title:'Error!',msg:response.statusText+':'+response.status});
		    }
		}, function errorCallback(response) {
			$scope.showModal({title:'Error!',msg:response.statusText+':'+response.status+''+response.config.url});
			console.log(response);
		});
    }

    getTotal=function(){
    	var suma=0;
    	var datos=$scope.datos;
    	for(var i =0;i<datos.length;++i){
    		suma+=datos[i]["CALCULA_RECAUDO_FUENTES"];
    	}
    	$scope.total=suma;
    }

    $scope.showModal=function(config){
    	console.log(config);
    	var myPopup = $ionicPopup.alert({
	     title: config.title,
	     template: config.msg
	    });

	  myPopup.then(function(res) {
	    console.log('Tapped!', res);
	  });

    }
    cargarDatos();

}]);