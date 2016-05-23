// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngResource', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
  })

  .state('app.main', {
    url: '/main',
    views: {
      'menuContent': {
        templateUrl: 'templates/main.html'
      }
    }
  })

  .state('app.venue', {
    url: '/venue',
    views: {
      'menuContent': {
        templateUrl: 'templates/venue.html'
      }
    }
  })

  .state('app.workshops', {
    url: '/workshops',
    views: {
      'menuContent': {
        templateUrl: 'templates/workshops.html'
      }
    }
  })

  .state('app.speakers', {
    url: '/speakers',
    views: {
      'menuContent': {
        templateUrl: 'templates/speakers.html'
      }
    }
  })

  .state('app.organizers', {
    url: '/organizers',
    views: {
      'menuContent': {
        templateUrl: 'templates/organizers.html'
      }
    }
  })

  .state('app.sponsors', {
    url: '/sponsors',
    views: {
      'menuContent': {
        templateUrl: 'templates/sponsors.html'
      }
    }
  })

  .state('app.schedule', {
    url: '/schedule',
    views: {
      'menuContent': {
        templateUrl: 'templates/schedule.html'
      }
    }
  })

  .state('app.tracks_monday', {
    url: '/tracks_monday',
    views: {
      'menuContent': {
        templateUrl: 'templates/tracks_monday.html'
      }
    }
  })

  .state('app.tracks_tuesday', {
    url: '/tracks_tuesday',
    views: {
      'menuContent': {
        templateUrl: 'templates/tracks_tuesday.html'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');

  $ionicConfigProvider.backButton.text('')
  $ionicConfigProvider.backButton.text('').icon('ion-chevron-left').previousTitleText(false);

});
