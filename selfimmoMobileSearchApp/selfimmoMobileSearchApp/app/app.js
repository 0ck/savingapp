// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app',
    ['ionic',
     'mainCtrl',
     'searchCtrl',
     'homeCtrl',
     'resultCtrl',
     'detailsCtrl',
     'resultMapCtrl',
     'resultCardCtrl',
     'ionic.contrib.ui.tinderCards',
     'pascalprecht.translate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "app/menu.html",
    controller: 'MainCtrl'
  })

      .state('app.tabs', {
          url: "/tab",
          abstract:true,
          views: {
              'menuContent': {
                  templateUrl: "app/result/tabNav.html",
              }
          }
      })

    .state('app.tabs.listproperties', {
      url: "/listproperties",
      views: {
          'list-tab': {
          templateUrl: "app/result/resultList/listproperties.html",
          controller: 'ListpropertiesCtrl'
        }
      }
    })

  .state('app.siglebien', {
      url: "/listproperty/:propertyId",
    views: {
      'menuContent': {
        templateUrl: "app/details/listproperty.html",
        controller: 'PropertyCtrl'
      }
    }
  })

  .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "app/home/home.html",
          controller: 'HomeCtrl'
        }
      }
  })

  .state('app.searchform', {
      url: "/searchform/:param",
      views: {
        'menuContent': {
            templateUrl: "app/search/searchform.html",
            controller: 'SearchCtrl'
        }
      }
  })

      .state('app.tabs.mapproperties', {
          url: "/mapproperties",
          views: {
              'list-tab': {
                  templateUrl: "app/result/resultMap/mapproperties.html",
                  controller: 'MapPropertiesCtrl'
              }
          }
      })

          .state('app.tabs.cardproperties', {
              url: "/cardproperties",
              views: {
                  'list-tab': {
                      templateUrl: "app/result/resultCard/cardproperties.html",
                      controller: 'CardPropertiesCtrl'
                  }
              }
          })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

.config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '/languages/',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('fr');
});
