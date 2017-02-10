app.config(function config($urlRouterProvider, $stateProvider) {

  $stateProvider.state('home', {
    url: '/',
    controller: 'homeCtrl',
    templateUrl: 'app/home/home.html',
  });
  
  $urlRouterProvider.otherwise('/');
})
