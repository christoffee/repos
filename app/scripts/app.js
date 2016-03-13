'use strict';

/**
 * @ngdoc overview
 * @name reposApp
 * @description
 * # reposApp
 *
 * Main module of the application.
 */
angular
  .module('reposApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/repos.html',
        controller: 'ReposCtrl',
        controllerAs: 'repos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
