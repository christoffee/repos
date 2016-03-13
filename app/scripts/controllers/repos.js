'use strict';

/**
 * @ngdoc function
 * @name reposApp.controller:ReposCtrl
 * @description
 * # ReposCtrl
 * Controller of the reposApp
 */
angular.module('reposApp')
  .controller('ReposCtrl', function ($scope, GitHubRepos) {
    $scope.repos = [];
    GitHubRepos.get({developer: 'christoffee'})
        .$promise.then(function(repos) {
          $scope.repos = repos;
        });
  });
