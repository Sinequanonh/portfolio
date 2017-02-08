import app from './app.js'

app.config(($urlRouterProvider, $stateProvider) => {
  // Home
  $stateProvider.state('home', {
    url: '/',
  })
  $urlRouterProvider.otherwise('/')
})
