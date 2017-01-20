// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngRoute','app.constants','app.controllers','app.services','ionic-datepicker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider,$urlRouterProvider){
  $stateProvider.state("home",{
    url:"/home",
    controller:"homeCtrl",
    templateUrl:"templates/home-view.html"
  });

  $urlRouterProvider.otherwise("/home");
}).config(function ($ionicConfigProvider, ionicDatePickerProvider) {

    var datePickerObj = {
      setLabel: 'Seleccionar',
      todayLabel: 'Hoy',
      closeLabel: 'Cerrar',
      mondayFirst: false,
      inputDate: new Date(),
      weeksList: ["D", "L", "M", "M", "J", "V", "S"],
      monthsList: ["Ene", "Feb", "Marz", "Abril", "May", "Jun", "Jul", "Agost", "Sept", "Oct", "Nov", "Dic"],
      templateType: 'popup',
      showTodayButton: true,
      dateFormat: 'yyyy-MM-dd',//'dd - MMM - yyyy',
      closeOnSelect: false,
      disableWeekdays: [],
      from: new Date(2015, 8, 1),
      //dateFormat
    };

    ionicDatePickerProvider.configDatePicker(datePickerObj);

    $ionicConfigProvider.tabs.position('bottom');

  });
