
angular.module('quickact', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.sectors', {
      url: '/sectors',
      views: {
        'tab-inner': {
          templateUrl: 'templates/sectors.html',
          controller: 'SectorCtrl'
        }
      }
    })
.state('tab.second', {
      url: '/second',
      views: {
        'tab-inner': {
          templateUrl: 'templates/second.html',
          controller: 'ActivityCtrl'
        }
      }
    })

.state('tab.problem', {
      url: '/problem',
      views: {
        'tab-inner': {
          templateUrl: 'templates/select-problem.html',
          controller: 'ProblemCtrl'
        }
      }
    })
.state('tab.proof', {
      url: '/proof',
      views: {
        'tab-inner': {
          templateUrl: 'templates/addproof.html',
          controller: 'ProofCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
