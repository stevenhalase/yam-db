angular.module('yamDBApp', ['ui.router'])
  .config(yamDBRouter);

yamDBRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function yamDBRouter($stateProvider,$urlRouterProvider) {
  $stateProvider
    .state('home', {
      url         : '/',
      templateUrl : 'partials/home.html',
      controller  : 'homeCtrl as hCtrl'
    })

    $urlRouterProvider.otherwise('/')
}
