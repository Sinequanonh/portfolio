'use strict';

app.config(function config($urlRouterProvider, $locationProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/',
    controller: 'homeCtrl',
    templateUrl: 'app/home/home.html'
  });

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
});
//# sourceMappingURL=routes.js.map